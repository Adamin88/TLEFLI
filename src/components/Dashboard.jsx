import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from '@react-spring/web'
import { 
  Home, Package, Search, ChevronRight, Trash2, Edit, Eye, X, Menu
} from 'lucide-react'
import DeclareAnItem from './DeclareAnItem'

const itemStatuses = [
  { name: "Objet Enregistré", color: "bg-blue-500" },
  { name: "Authentification en Cours", color: "bg-yellow-500" },
  { name: "Authentification Vérifiée", color: "bg-indigo-500" },
  { name: "Restitution en Cours", color: "bg-purple-500" },
  { name: "Objet Restitué", color: "bg-gray-500" },
]

const categories = [
  {
    name: "Électronique",
    subcategories: ["Smartphones", "Ordinateurs portables", "Tablettes", "Écouteurs", "Appareils photo"]
  },
  {
    name: "Vêtements",
    subcategories: ["Chemises", "Pantalons", "Robes", "Chaussures", "Vestes"]
  },
  {
    name: "Accessoires",
    subcategories: ["Montres", "Bijoux", "Sacs", "Portefeuilles", "Lunettes"]
  },
  {
    name: "Objets personnels",
    subcategories: ["Clés", "Cartes d'identité", "Passeports", "Cartes de crédit"]
  }
]

const AnimatedStep = ({ step, delay, active, isCurrent }) => {
  const props = useSpring({
    opacity: active ? 1 : 0.5,
    scale: active ? 1 : 0.95,
    config: { mass: 1, tension: 280, friction: 20 },
    delay: delay * 100,
  })

  const numberProps = useSpring({
    number: step.number,
    from: { number: 0 },
    config: { mass: 1, tension: 280, friction: 120 },
    delay: delay * 100,
  })

  const pulseProps = useSpring({
    from: { scale: 1 },
    to: async (next) => {
      while (isCurrent) {
        await next({ scale: 1.1 })
        await next({ scale: 1 })
      }
    },
    config: { tension: 300, friction: 10 },
  })

  return (
    <animated.div style={props} className="flex items-center mb-2">
      <animated.div 
        style={isCurrent ? pulseProps : {}} 
        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${active ? 'bg-blue-500' : 'bg-gray-300'} flex items-center justify-center mr-2`}
      >
        <animated.span className="text-white font-bold text-xs sm:text-sm">
          {numberProps.number.to(n => Math.floor(n))}
        </animated.span>
      </animated.div>
      <span className={`text-xs sm:text-sm ${active ? 'font-semibold' : ''}`}>{step.text}</span>
    </animated.div>
  )
}

AnimatedStep.propTypes = {
  step: PropTypes.shape({
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  delay: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  isCurrent: PropTypes.bool.isRequired,
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [items, setItems] = useState([])
  const [matches, setMatches] = useState([])
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState({
    dateAdded: "all",
    status: "all",
    category: "all",
    subcategory: "all"
  })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    // Fetch user's items and matches
    // This is a mock implementation. Replace with actual API calls.
    setItems([
      { id: 1, name: "iPhone 12", category: "Électronique", subcategory: "Smartphones", status: "Objet Enregistré", date: "2023-05-15", type: "P", dateAdded: "2023-05-14", image: "./images/iphone12.jpg" },
      { id: 2, name: "Portefeuille Bleu", category: "Accessoires", subcategory: "Portefeuilles", status: "Authentification en Cours", date: "2023-05-10", type: "P", dateAdded: "2023-05-09", image: "./images/bluewallet.jpg" },
      { id: 3, name: "Clés de Voiture", category: "Objets personnels", subcategory: "Clés", status: "Authentification Vérifiée", date: "2023-05-05", type: "T", dateAdded: "2023-05-04", image: "./images/car-keys.webp" },
      { id: 4, name: "Ordinateur Portable", category: "Électronique", subcategory: "Ordinateurs portables", status: "Restitution en Cours", date: "2023-05-20", type: "P", dateAdded: "2023-05-19", image: "./images/laptop.jpg" },
      { id: 5, name: "Parapluie", category: "Accessoires", subcategory: "Autres", status: "Objet Restitué", date: "2023-05-01", type: "T", dateAdded: "2023-04-30", image: "./images/umbrella.avif" },
    ])
    setMatches([
      { id: 1, itemName: "iPhone 12", matchedWith: "iPhone 12 Trouvé", status: "Restitution en Cours", date: "2023-05-16", image: "/placeholder.svg?height=100&width=100" },
      { id: 2, itemName: "Portefeuille Bleu", matchedWith: "Portefeuille Bleu Trouvé", status: "Authentification en Cours", date: "2023-05-12", image: "/placeholder.svg?height=100&width=100" },
    ])
  }, [])

  const renderStatusBadge = (status) => {
    const statusObj = itemStatuses.find(s => s.name === status)
    return (
      <span className={`px-2 p-1 rounded-full text-xs font-medium ${statusObj.color} text-white`}>
        {status}
      </span>
    )
  }

  const renderItemCard = (item, isHomeTab = false) => {
    const steps = [
      { number: 1, text: "Objet Enregistré" },
      { number: 2, text: "Authentification en Cours" },
      { number: 3, text: "Authentification Vérifiée" },
      { number: 4, text: "Restitution en Cours" },
      { number: 5, text: "Objet Restitué" },
    ]

    const currentStep = steps.findIndex(step => step.text === item.status) + 1

    return (
      <div key={item.id} className={`bg-white rounded-lg shadow-sm ${item.type === 'P' ? 'shadow-red-500' : 'shadow-green-500'} p-4 mb-4 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]`}>
        <div className="flex items-start space-x-4">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h3 className="text-sm sm:text-lg font-semibold">{item.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.type === 'P' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
                {item.type}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">{item.category} - {item.subcategory}</p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
              <span className="text-xs sm:text-sm text-gray-500">{item.date}</span>
              {renderStatusBadge(item.status)}
            </div>
          </div>
        </div>
        {isHomeTab && (
          <div className="mt-4">
            {steps.map((step, index) => (
              <AnimatedStep 
                key={index} 
                step={step} 
                delay={index} 
                active={index < currentStep} 
                isCurrent={index + 1 === currentStep}
              />
            ))}
          </div>
        )}
        {!isHomeTab && (
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={() => handleShowItem(item.id)}
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"
              aria-label={`Afficher les détails de ${item.name}`}
            >
              <Eye size={16} />
            </button>
            <button
              onClick={() => handleEditItem(item.id)}
              className="p-2 bg-yellow-100 text-yellow-600 rounded-full hover:bg-yellow-200"
              aria-label={`Modifier ${item.name}`}
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
              aria-label={`Supprimer ${item.name}`}
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>
    )
  }

  const renderMatchCard = (match) => (
    <div key={match.id} className="bg-white rounded-lg shadow-md p-4 mb-4 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
      <div className="flex items-start space-x-4">
        <img src={match.image} alt={match.itemName} className="w-20 h-20 object-cover rounded-md" />
        <div className="flex-grow">
          <h3 className="text-sm sm:text-lg font-semibold">{match.itemName}</h3>
          <p className="text-xs sm:text-sm text-gray-600">Correspondance avec : {match.matchedWith}</p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
            <span className="text-xs sm:text-sm text-gray-500">{match.date}</span>
            {renderStatusBadge(match.status)}
          </div>
        </div>
      </div>
    </div>
  )

  const handleShowItem = (itemId) => {
    // Implement show item functionality
    console.log(`Affichage de l'objet avec l'id : ${itemId}`)
  }

  const handleEditItem = (itemId) => {
    // Implement edit item functionality
    console.log(`Modification de l'objet avec l'id : ${itemId}`)
  }

  const handleRemoveItem = (itemId) => {
    // Implement remove item functionality
    setItems(items.filter(item => item.id !== itemId))
    console.log(`Objet supprimé avec l'id : ${itemId}`)
  }

  const filterItems = () => {
    return items.filter(item => {
      const matchesName = item.name.toLowerCase().includes(search.toLowerCase())
      const matchesDateAdded = filters.dateAdded === "all" || 
        (filters.dateAdded === "7days" && new Date(item.dateAdded) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
        (filters.dateAdded === "30days" && new Date(item.dateAdded) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
      const matchesStatus = filters.status === "all" || item.type === filters.status
      const matchesCategory = filters.category === "all" || item.category === filters.category
      const matchesSubcategory = filters.subcategory === "all" || item.subcategory === filters.subcategory

      return matchesName && matchesDateAdded && matchesStatus && matchesCategory && matchesSubcategory
    })
  }

  const renderSidebar = () => (
    <div className={`fixed rounded-r-lg inset-y-0 left-0 z-30 w-64 bg-white shadow-2xl shadow-yellow-600 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>
        <nav className="space-y-2">
          <button
            className={`w-full flex items-center justify-between px-4 py-2 text-left rounded-md ${activeTab === "home" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => { setActiveTab("home"); setIsSidebarOpen(false); }}
          >
            <span className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Accueil
            </span>
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            className={`w-full flex items-center justify-between px-4 py-2 text-left rounded-md ${activeTab === "myItems" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => { setActiveTab("myItems"); setIsSidebarOpen(false); }}
          >
            <span className="flex items-center">
              <Package className="mr-2 h-4 w-4" />
              Mes  Objets
            </span>
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            className={`w-full flex items-center justify-between px-4 py-2 text-left rounded-md ${activeTab === "matches" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => { setActiveTab("matches"); setIsSidebarOpen(false); }}
          >
            <span className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Correspondances
            </span>
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            className={`w-full flex items-center justify-between px-4 py-2 text-left rounded-md ${activeTab === "declare" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`}
            onClick={() => { setActiveTab("declare"); setIsSidebarOpen(false); }}
          >
            <span className="flex items-center">
              <Package className="mr-2 h-4 w-4" />
              Déclarer un Objet
            </span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col h-screen bg-gray-100 pt-5">
      <header className="bg-white shadow-md p-4 flex items-center lg:hidden">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-gray-700">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Menu</h1>
        <div className="w-6"></div> {/* This empty div helps center the title */}
      </header>
      <div className="flex flex-1 overflow-hidden">
        {renderSidebar()}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
            {activeTab === "home" && "Tableau de Bord"}
            {activeTab === "myItems" && "Mes Objets"}
            {activeTab === "matches" && "Correspondances en Cours"}
            {activeTab === "declare" && "Déclarer un Objet"}
          </h1>

          {activeTab === "home" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="bg-white rounded-lg shadow-sm shadow-yellow-600 p-4">
                <h3 className="text-lg font-semibold mb-2">Total des Objets</h3>
                <p className="text-3xl lg:text-4xl font-bold">{items.length}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm shadow-yellow-600 p-4">
                <h3 className="text-lg font-semibold mb-2">Correspondances Actives</h3>
                <p className="text-3xl lg:text-4xl font-bold">{matches.length}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm shadow-yellow-600 p-4">
                <h3 className="text-lg font-semibold mb-2">Activité Récente</h3>
                <ul className="space-y-2">
                  {[...items, ...matches].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5).map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-sm">{item.name || item.itemName}</span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "home" && (
            <div className="mt-8">
              <h2 className="text-xl lg:text-2xl font-bold mb-4">Vos Objets</h2>
              <div className="flex flex-wrap gap-4">
                {items.map(item => renderItemCard(item, true))}
              </div>
            </div>
          )}

          {activeTab === "myItems" && (
            <div>
              <div className="mb-4 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
                <div className="w-full sm:flex-grow">
                  <input
                    type="text"
                    placeholder="Rechercher un objet..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <select
                    value={filters.dateAdded}
                    onChange={(e) => setFilters({...filters, dateAdded: e.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="all">Toutes les dates</option>
                    <option value="7days">7 derniers jours</option>
                    <option value="30days">30 derniers jours</option>
                  </select>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="P">Perdus</option>
                    <option value="T">Trouvés</option>
                  </select>
                  <select
                    value={filters.category}
                    onChange={(e) => {
                      setFilters({...filters, category: e.target.value, subcategory: "all"})
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="all">Toutes les catégories</option>
                    {categories.map(cat => (
                      <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                  {filters.category !== "all" && (
                    <select
                      value={filters.subcategory}
                      onChange={(e) => setFilters({...filters, subcategory: e.target.value})}
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="all">Toutes les sous-catégories</option>
                      {categories.find(cat => cat.name === filters.category)?.subcategories.map(subCat => (
                        <option key={subCat} value={subCat}>{subCat}</option>
                      ))}
                    </select>
                  )}
                  <button
                    onClick={() => setFilters({
                      dateAdded: "all",
                      status: "all",
                      category: "all",
                      subcategory: "all"
                    })}
                    className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {filterItems().map(item => renderItemCard(item))}
              </div>
            </div>
          )}

          {activeTab === "matches" && (
            <div className="flex flex-wrap gap-4">
              {matches.map(renderMatchCard)}
            </div>
          )}

          {activeTab === "declare" && (
            <div>
              <DeclareAnItem
                onSubmit={(formData) => {
                  console.log('Formulaire soumis:', formData)
                  // Here you would typically send this data to your backend API
                  setActiveTab("home")
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
import { useState, useEffect } from 'react'
import { 
  Smartphone, Laptop, Headphones, Shirt, Footprints, Watch, Briefcase, 
  Wallet, Key, Book, Umbrella, Camera, Glasses, Pen, Bike,
  Tablet, Gem, Plane, Notebook, Volleyball, Car, Tv, Printer,
  Keyboard, Mouse, Speaker, Mic, Guitar, Drum, Piano,
  CheckCircle2, Upload, ChevronLeft, ChevronDown, ChevronUp, Plus
} from 'lucide-react'



const categories = [
  {
    name: "Électronique",
    icon: <Smartphone className="w-8 h-8" />,
    subcategories: [
      { name: "Smartphones", icon: <Smartphone className="w-6 h-6" /> },
      { name: "Ordinateurs portables", icon: <Laptop className="w-6 h-6" /> },
      { name: "Tablettes", icon: <Tablet className="w-6 h-6" /> },
      { name: "Écouteurs", icon: <Headphones className="w-6 h-6" /> },
      { name: "Appareils photo", icon: <Camera className="w-6 h-6" /> },
      { name: "Télévisions", icon: <Tv className="w-6 h-6" /> },
      { name: "Imprimantes", icon: <Printer className="w-6 h-6" /> },
      { name: "Claviers", icon: <Keyboard className="w-6 h-6" /> },
      { name: "Souris", icon: <Mouse className="w-6 h-6" /> },
      { name: "Enceintes", icon: <Speaker className="w-6 h-6" /> },
    ]
  },
  {
    name: "Vêtements",
    icon: <Shirt className="w-8 h-8" />,
    subcategories: [
      { name: "Chemises", icon: <Shirt className="w-6 h-6" /> },
      { name: "Pantalons", icon: <Shirt className="w-6 h-6 rotate-90" /> },
      { name: "Robes", icon: <Shirt className="w-6 h-6" /> },
      { name: "Chaussures", icon: <Footprints className="w-6 h-6" /> },
      { name: "Vestes", icon: <Shirt className="w-6 h-6" /> },
      { name: "Chapeaux", icon: <Shirt className="w-6 h-6" /> },
    ]
  },
  {
    name: "Accessoires",
    icon: <Watch className="w-8 h-8" />,
    subcategories: [
      { name: "Montres", icon: <Watch className="w-6 h-6" /> },
      { name: "Bijoux", icon: <Gem className="w-6 h-6" /> },
      { name: "Sacs", icon: <Briefcase className="w-6 h-6" /> },
      { name: "Portefeuilles", icon: <Wallet className="w-6 h-6" /> },
      { name: "Lunettes", icon: <Glasses className="w-6 h-6" /> },
      { name: "Ceintures", icon: <Briefcase className="w-6 h-6" /> },
    ]
  },
  {
    name: "Objets personnels",
    icon: <Key className="w-8 h-8" />,
    subcategories: [
      { name: "Clés", icon: <Key className="w-6 h-6" /> },
      { name: "Cartes d'identité", icon: <Wallet className="w-6 h-6" /> },
      { name: "Passeports", icon: <Plane className="w-6 h-6" /> },
      { name: "Cartes de crédit", icon: <Wallet className="w-6 h-6" /> },
    ]
  },
  {
    name: "Livres et documents",
    icon: <Book className="w-8 h-8" />,
    subcategories: [
      { name: "Livres", icon: <Book className="w-6 h-6" /> },
      { name: "Cahiers", icon: <Notebook className="w-6 h-6" /> },
      { name: "Documents", icon: <Pen className="w-6 h-6" /> },
      { name: "Magazines", icon: <Book className="w-6 h-6" /> },
    ]
  },
  {
    name: "Sports et plein air",
    icon: <Bike className="w-8 h-8" />,
    subcategories: [
      { name: "Vélos", icon: <Bike className="w-6 h-6" /> },
      { name: "Ballons", icon: <Volleyball className="w-6 h-6" /> },
      { name: "Raquettes", icon: <Volleyball className="w-6 h-6" /> },
      { name: "Équipement de camping", icon: <Umbrella className="w-6 h-6" /> },
    ]
  },
  {
    name: "Instruments de musique",
    icon: <Guitar className="w-8 h-8" />,
    subcategories: [
      { name: "Guitares", icon: <Guitar className="w-6 h-6" /> },
      { name: "Batteries", icon: <Drum className="w-6 h-6" /> },
      { name: "Pianos", icon: <Piano className="w-6 h-6" /> },
      { name: "Microphones", icon: <Mic className="w-6 h-6" /> },
    ]
  },
  {
    name: "Véhicules",
    icon: <Car className="w-8 h-8" />,
    subcategories: [
      { name: "Voitures", icon: <Car className="w-6 h-6" /> },
      { name: "Motos", icon: <Bike className="w-6 h-6" /> },
      { name: "Vélos", icon: <Bike className="w-6 h-6" /> },
      { name: "Trottinettes", icon: <Bike className="w-6 h-6" /> },
    ]
  },
]

const brands = {
  Électronique: ["Apple", "Samsung", "Sony", "LG", "Dell", "HP", "Lenovo", "Asus", "Acer", "Bose", "JBL", "Canon", "Nikon", "Logitech", "Microsoft"],
  Vêtements: ["Nike", "Adidas", "Zara", "H&M", "Levi's", "Gap", "Uniqlo", "Gucci", "Prada", "Versace", "Ralph Lauren", "Tommy Hilfiger", "Calvin Klein"],
  Accessoires: ["Rolex", "Casio", "Fossil", "Michael Kors", "Pandora", "Swarovski", "Ray-Ban", "Oakley", "Samsonite", "Herschel", "Tumi"],
  "Sports et plein air": ["Nike", "Adidas", "Under Armour", "The North Face", "Patagonia", "Columbia", "Trek", "Specialized", "Wilson", "Spalding"],
  "Instruments de musique": ["Yamaha", "Fender", "Gibson", "Roland", "Korg", "Shure", "Audio-Technica", "Steinway & Sons", "Pearl", "Ibanez"],
  Véhicules: ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Nissan", "Hyundai", "Trek", "Specialized", "Giant"],
}

const colors = [
  { name: "Rouge", hex: "#FF0000" },
  { name: "Bleu", hex: "#0000FF" },
  { name: "Vert", hex: "#00FF00" },
  { name: "Jaune", hex: "#FFFF00" },
  { name: "Violet", hex: "#800080" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Rose", hex: "#FFC0CB" },
  { name: "Marron", hex: "#A52A2A" },
  { name: "Gris", hex: "#808080" },
  { name: "Noir", hex: "#000000" },
  { name: "Blanc", hex: "#FFFFFF" },
]

const additionalColors = [
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Citron vert", hex: "#00FF00" },
  { name: "Sarcelle", hex: "#008080" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Bordeaux", hex: "#800000" },
  { name: "Bleu marine", hex: "#000080" },
  { name: "Olive", hex: "#808000" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Or", hex: "#FFD700" },
  { name: "Argent", hex: "#C0C0C0" },
  { name: "Beige", hex: "#F5F5DC" },
]

export default function Component() {
  const [activeTab, setActiveTab] = useState("lost")
  const [formData, setFormData] = useState({
    itemName: "",
    date: new Date().toISOString().split('T')[0],
    dateOption: "today",
    location: "",
    description: "",
    brand: "",
    model: "",
    color: "",
    keyType: "",
    numberOfKeys: "",
    idType: "",
    issuingAuthority: "",
    expirationDate: "",
    passportCountry: "",
    creditCardIssuer: "",
    lastFourDigits: "",
    bookTitle: "",
    author: "",
    isbn: "",
    documentType: "",
  })
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)
  const [image, setImage] = useState(null)
  const [showAdditionalColors, setShowAdditionalColors] = useState(false)
  const [cities, setCities] = useState([])
  const [filteredCities, setFilteredCities] = useState([])

  useEffect(() => {
    fetch('/villes.json')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error('Error loading cities:', error))
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))

    if (name === 'location') {
      const filtered = cities.filter(city => 
        city.ville.toLowerCase().startsWith(value.toLowerCase())
      ).slice(0, 5)
      setFilteredCities(filtered)
    }
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setSelectedSubcategory(null)
    setFormData((prev) => ({ ...prev, brand: "", model: "" }))
    setErrors((prev) => ({ ...prev, category: "", subcategory: "" }))
  }

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory)
    setFormData((prev) => ({ ...prev, brand: "", model: "" }))
    setErrors((prev) => ({ ...prev, subcategory: "" }))
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
    setSelectedSubcategory(null)
    setFormData((prev) => ({ ...prev, brand: "", model: "" }))
  }

  const handleDateOptionChange = (option) => {
    const date = new Date()
    if (option === 'yesterday') {
      date.setDate(date.getDate() - 1)
    } else if (option === 'dayBeforeYesterday') {
      date.setDate(date.getDate() - 2)
    }
    setFormData((prev) => ({ 
      ...prev, 
      dateOption: option,
      date: date.toISOString().split('T')[0]
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.itemName.trim()) newErrors.itemName = "Le nom de l'objet est requis"
    if (!selectedCategory) newErrors.category = "La catégorie est requise"
    if (!selectedSubcategory) newErrors.subcategory = "La sous-catégorie est requise"
    if (!formData.date) newErrors.date = "La date est requise"
    if (!formData.location.trim()) newErrors.location = "Le lieu est requis"
    if (brands[selectedCategory?.name] && !formData.brand) newErrors.brand = "La marque est requise"
    if (!formData.model) newErrors.model = "Le modèle est requis"
    if (!formData.color) newErrors.color = "La couleur est requise"

    if (selectedCategory?.name === "Objets personnels") {
      if (selectedSubcategory?.name === "Clés" && !formData.keyType) newErrors.keyType = "Le type de clé est requis"
      if (selectedSubcategory?.name === "Cartes d'identité" && !formData.idType) newErrors.idType = "Le type de carte d'identité est requis"
      if (selectedSubcategory?.name === "Passeports" && !formData.passportCountry) newErrors.passportCountry = "Le pays du passeport est requis"
      if (selectedSubcategory?.name === "Cartes de crédit" && !formData.creditCardIssuer) newErrors.creditCardIssuer = "L'émetteur de la carte de crédit est requis"
    }

    if (selectedCategory?.name === "Livres et documents") {
      if (selectedSubcategory?.name === "Livres" && !formData.bookTitle) newErrors.bookTitle = "Le titre du livre est requis"
      if (selectedSubcategory?.name === "Documents" && !formData.documentType) newErrors.documentType = "Le type de document est requis"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if  (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    console.log('Soumis:', { 
      ...formData, 
      type: activeTab,
      category: selectedCategory?.name,
      subcategory: selectedSubcategory?.name,
      image
    })
    
    setTimeout(() => {
      setSubmitStatus("success")
      setFormData({
        itemName: "",
        date: new Date().toISOString().split('T')[0],
        dateOption: "today",
        location: "",
        description: "",
        brand: "",
        model: "",
        color: "",
        keyType: "",
        numberOfKeys: "",
        idType: "",
        issuingAuthority: "",
        expirationDate: "",
        passportCountry: "",
        creditCardIssuer: "",
        lastFourDigits: "",
        bookTitle: "",
        author: "",
        isbn: "",
        documentType: "",
      })
      setSelectedCategory(null)
      setSelectedSubcategory(null)
      setImage(null)
    }, 1000)
  }

  const renderAdditionalFields = () => {
    if (selectedCategory?.name === "Objets personnels") {
      switch (selectedSubcategory?.name) {
        case "Clés":
          return (
            <>
              <div>
                <label htmlFor="keyType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de clé
                </label>
                <input
                  type="text"
                  id="keyType"
                  name="keyType"
                  value={formData.keyType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: Clé de maison, Clé de voiture"
                />
                {errors.keyType && <p className="mt-1 text-sm text-red-600">{errors.keyType}</p>}
              </div>
              <div>
                <label htmlFor="numberOfKeys" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de clés
                </label>
                <input
                  type="number"
                  id="numberOfKeys"
                  name="numberOfKeys"
                  value={formData.numberOfKeys}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: 2"
                />
              </div>
            </>
          )
        case "Cartes d'identité":
          return (
            <>
              <div>
                <label htmlFor="idType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de carte d'identité
                </label>
                <input
                  type="text"
                  id="idType"
                  name="idType"
                  value={formData.idType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: Permis de conduire, Carte d'étudiant"
                />
                {errors.idType && <p className="mt-1 text-sm text-red-600">{errors.idType}</p>}
              </div>
              <div>
                <label htmlFor="issuingAuthority" className="block text-sm font-medium text-gray-700 mb-1">
                  Autorité émettrice
                </label>
                <input
                  type="text"
                  id="issuingAuthority"
                  name="issuingAuthority"
                  value={formData.issuingAuthority}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: Préfecture, Université"
                />
              </div>
              <div>
                <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Date d'expiration
                </label>
                <input
                  type="date"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </>
          )
        case "Passeports":
          return (
            <>
              <div>
                <label htmlFor="passportCountry" className="block text-sm font-medium text-gray-700 mb-1">
                  Pays du passeport
                </label>
                <input
                  type="text"
                  id="passportCountry"
                  name="passportCountry"
                  value={formData.passportCountry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: France"
                />
                {errors.passportCountry && <p className="mt-1 text-sm text-red-600">{errors.passportCountry}</p>}
              </div>
              <div>
                <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Date d'expiration
                </label>
                <input
                  type="date"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </>
          )
        case "Cartes de crédit":
          return (
            <>
              <div>
                <label htmlFor="creditCardIssuer" className="block text-sm font-medium text-gray-700 mb-1">
                  Émetteur de la carte de crédit
                </label>
                <input
                  type="text"
                  id="creditCardIssuer"
                  name="creditCardIssuer"
                  value={formData.creditCardIssuer}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: Visa, Mastercard"
                />
                {errors.creditCardIssuer && <p className="mt-1 text-sm text-red-600">{errors.creditCardIssuer}</p>}
              </div>
              <div>
                <label htmlFor="lastFourDigits" className="block text-sm font-medium text-gray-700 mb-1">
                  Quatre derniers chiffres
                </label>
                <input
                  type="text"
                  id="lastFourDigits"
                  name="lastFourDigits"
                  value={formData.lastFourDigits}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: 1234"
                  maxLength="4"
                  pattern="\d{4}"
                />
              </div>
            </>
          )
        default:
          return null
      }
    } else if (selectedCategory?.name === "Livres et documents") {
      switch (selectedSubcategory?.name) {
        case "Livres":
          return (
            <>
              <div>
                <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Titre du livre
                </label>
                <input
                  type="text"
                  id="bookTitle"
                  name="bookTitle"
                  value={formData.bookTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: Le Petit Prince"
                />
                {errors.bookTitle && <p className="mt-1 text-sm text-red-600">{errors.bookTitle}</p>}
              </div>
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Auteur
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: Antoine de Saint-Exupéry"
                />
              </div>
              <div>
                <label htmlFor="isbn" className="block text-sm font-medium text-gray-700 mb-1">
                  ISBN
                </label>
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: 978-2070612758"
                />
              </div>
            </>
          )
        case "Documents":
          return (
            <>
              <div>
                <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de document
                </label>
                <input
                  type="text"
                  id="documentType"
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: Contrat, Certificat"
                />
                {errors.documentType && <p className="mt-1 text-sm text-red-600">{errors.documentType}</p>}
              </div>
              <div>
                <label htmlFor="issuingAuthority" className="block text-sm font-medium text-gray-700 mb-1">
                  Autorité émettrice
                </label>
                <input
                  type="text"
                  id="issuingAuthority"
                  name="issuingAuthority"
                  value={formData.issuingAuthority}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: Nom de l'entreprise, Agence gouvernementale"
                />
              </div>
            </>
          )
        default:
          return null
      }
    }
    return null
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-2xl shadow-yellow-600 mt-14 mb-36">
      <h2 className="text-2xl font-bold mb-6">Déclarer un objet</h2>
      <div className="flex mb-6 mx-auto gap-20">
        <button
          className={`flex-1 py-2 px-4 text-center rounded-3xl ${activeTab === 'lost' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('lost')}
        >
          Objet perdu
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center rounded-3xl ${activeTab === 'found' ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('found')}
        >
          Objet trouvé
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date {activeTab === "lost" ? "de perte" : "de découverte"}
          </label>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => handleDateOptionChange('today')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                formData.dateOption === 'today'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Aujourd'hui
            </button>
            <button
              type="button"
              onClick={() => handleDateOptionChange('yesterday')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                formData.dateOption === 'yesterday'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Hier
            </button>
            <button
              type="button"
              onClick={() => handleDateOptionChange('dayBeforeYesterday')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                formData.dateOption === 'dayBeforeYesterday'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Avant-hier
            </button>
            <button
              type="button"
              onClick={() => handleDateOptionChange('custom')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                formData.dateOption === 'custom'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Autre date
            </button>
          </div>
          {formData.dateOption === 'custom' && (
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
          {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Lieu
          </label>
          <div className="relative">
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="ex: Rabat"
              autoComplete="off"
            />
            {filteredCities.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {filteredCities.map((city) => (
                  <li
                    key={city.id}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, location: city.ville }))
                      setFilteredCities([])
                    }}
                  >
                    {city.ville}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
        </div>

        {!selectedCategory ? (
          <div>
            <h3 className="text-lg font-semibold mb-2">Sélectionnez une catégorie</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className="flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-200 bg-gray-100 hover:bg-gray-200"
                >
                  {category.icon}
                  <span className="mt-2 text-sm text-center">{category.name}</span>
                </button>
              ))}
            </div>
            {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Catégorie sélectionnée : {selectedCategory.name}</h3>
              <button
                type="button"
                onClick={handleBackToCategories}
                className="text-blue-600 hover:text-blue-800"
              >
                Changer de catégorie
              </button>
            </div>
            <h4 className="text-md font-medium mb-2">Sélectionnez une sous-catégorie</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {selectedCategory.subcategories.map((subcategory) => (
                <button
                  key={subcategory.name}
                  type="button"
                  onClick={() => handleSubcategoryClick(subcategory)}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-200 ${
                    selectedSubcategory === subcategory
                      ? 'bg-green-100 border-2 border-green-500'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {subcategory.icon}
                  <span className="mt-2 text-sm text-center">{subcategory.name}</span>
                </button>
              ))}
            </div>
            {errors.subcategory && <p className="mt-1 text-sm text-red-600">{errors.subcategory}</p>}
          </div>
        )}

        <div>
          <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom de l'objet
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="ex: Portefeuille bleu"
          />
          {errors.itemName && <p className="mt-1 text-sm text-red-600">{errors.itemName}</p>}
        </div>

        {selectedCategory && (
          <>
            {brands[selectedCategory.name] && (
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Marque
                </label>
                <select
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionnez une marque</option>
                  {brands[selectedCategory.name].map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
                {errors.brand && <p className="mt-1 text-sm text-red-600">{errors.brand}</p>}
              </div>
            )}

            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                Modèle
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder=""
              />
              {errors.model && <p className="mt-1 text-sm text-red-600">{errors.model}</p>}
            </div>

            <div>
              <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
                Couleur
              </label>
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, color: color.name }))}
                    className={`flex items-center p-2 rounded-md ${formData.color === color.name ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: color.hex }}></div>
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setShowAdditionalColors(!showAdditionalColors)}
                className="mt-2 text-blue-600 hover:text-blue-800 flex items-center"
              >
                {showAdditionalColors ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Masquer les couleurs supplémentaires
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    Afficher plus de couleurs
                  </>
                )}
              </button>
              {showAdditionalColors && (
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {additionalColors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, color: color.name }))}
                      className={`flex items-center p-2 rounded-md ${formData.color === color.name ? 'ring-2 ring-blue-500' : ''}`}
                    >
                      <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: color.hex }}></div>
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              )}
              {errors.color && <p className="mt-1 text-sm text-red-600">{errors.color}</p>}
            </div>
          </>
        )}

        {renderAdditionalFields()}

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Fournissez des détails supplémentaires sur l'objet..."
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Télécharger une image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Télécharger un fichier</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageUpload} accept="image/*" />
                </label>
                <p className="pl-1">ou glisser-déposer</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF jusqu'à 10Mo
              </p>
            </div>
          </div>
          {image && (
            <div className="mt-2">
              <img src={image} alt="Objet téléchargé" className="max-w-full h-auto" />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Soumettre le rapport d'objet {activeTab === "lost" ? "perdu" : "trouvé"}
        </button>
      </form>

      {submitStatus === "success" && (
        <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">
                Votre rapport d'objet {activeTab === "lost" ? "perdu" : "trouvé"} a été soumis avec succès.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
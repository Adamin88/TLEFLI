import { Link } from "react-router-dom";
import { Search, MapPin, Bell, Users, BarChart, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-white py-16 bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-zinc-400">
            Ce qui est perdu
            <br />
            finit souvent par revenir!
          </h1>
          <p className="text-xl mb-8">
            Localisez ce qui est perdu, retournez ce qui est trouvé.
          </p>
          <div className="space-x-10">
            <Link
              to="/declareitem"
              className="bg-gradient-to-r from-pink-400 to-red-500 text-black px-6 py-2 rounded-full font-semibold"
            >
              J'ai Perdu
            </Link>
            <Link
              to="/declareitem"
              className="bg-gradient-to-r from-yellow-200 to-green-500 text-black px-6 py-2 rounded-full font-semibold"
            >
              J'ai Trouvé
            </Link>
          </div>
        </div>
      </header>

      <section className=" py-5 bg-gradient-to-r from-rose-100 to-teal-100 px-20">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold text-center mb-12 pb-2">
            Comment ça marche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="px-1 py-2 text-center zoom-in rounded-3xl shadow-md shadow-yellow-600">
              <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1.Signalez</h3>
              <p>
                Signalez rapidement les objets perdus ou trouvés avec des
                descriptions détaillées et des photos.
              </p>
            </div>
            <div className="px-1 py-2 text-center zoom-in rounded-3xl shadow-md shadow-yellow-600">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2.Synchronisation</h3>
              <p>
                Quand votre objet est retrouvé, vous pouvez prouver qu'il vous
                appartient en répondant à une question de sécurité (par exemple
                : "Quelle est la couleur de votre sac à dos ?"). Cela permet à
                notre partenaire de confirmer en toute sécurité qu'il s'agit
                bien de votre objet.
              </p>
            </div>
            <div className="px-1 py-2 text-center zoom-in rounded-3xl shadow-md shadow-yellow-600">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3.Réunir</h3>
              <p>
                Après votre authentification, vous recevrez les instructions
                pour récupérer votre objet ou pour organiser sa livraison.
                N'oubliez pas de mentionner le numéro de référence trouvé pour
                faciliter la démarche.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6 border-b-2 text-yellow-600 ">
              Notre Mission
            </h2>
            <p className="p-5 text-3xl font-extrabold ">
              Connecter les objets perdus à leurs propriétaires.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Chez TLEFLI, notre mission est de créer une communauté mondiale
              qui aide les personnes à récupérer leurs objets perdus et à rendre
              les objets trouvés à leurs propriétaires légitimes. Nous croyons
              en la puissance de la technologie et de la bienveillance humaine
              pour rendre le monde un peu meilleur, un objet perdu à la fois.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir TLEFLI ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Axée sur la communauté
              </h3>
              <p className="text-gray-600">
                Rejoignez un réseau de personnes engagées à s'entraider pour
                retrouver des objets perdus.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Correspondance avancée
              </h3>
              <p className="text-gray-600">
                Notre algorithme sophistiqué augmente les chances de retrouver
                vos objets perdus.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Réseau étendu</h3>
              <p className="text-gray-600">
                Connectez-vous avec des personnes et des entreprises partout
                pour retrouver vos objets perdus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à commencer ?</h2>
          <Link
            to="/declareitem"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Signaler un objet maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}

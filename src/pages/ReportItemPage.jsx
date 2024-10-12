import { useState } from "react";
import { Camera } from "lucide-react";

export default function ReportItemPage() {
  const [itemData, setItemData] = useState({
    type: "lost",
    category: "",
    description: "",
    date: "",
    location: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setItemData({ ...itemData, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Submitting item data:", itemData);
    // Reset form or show success message
  };

  return (
    <div className="container max-w-full py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Signaler un Objet</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md shadow-yellow-700"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Statut
          </label>
          <div className="flex">
            <label className="inline-flex items-center mr-6">
              <input
                type="radio"
                className="form-radio"
                name="type"
                value="lost"
                checked={itemData.type === "lost"}
                onChange={handleInputChange}
              />
              <span className="ml-2">Perdu</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="type"
                value="found"
                checked={itemData.type === "found"}
                onChange={handleInputChange}
              />
              <span className="ml-2">Trouvé</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Categorie
          </label>
          <select
            id="category"
            name="category"
            value={itemData.category}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="electronics">Électronique</option>
            <option value="jewelry">Bijoux</option>
            <option value="clothing">Vêtements</option>
            <option value="accessories">Accessoires</option>
            <option value="documents">Documents</option>
            <option value="other">Autre</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={itemData.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            placeholder="Donnez une description détaillée de l'objet"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date {itemData.type === "" ? "" : ""}
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={itemData.date}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={itemData.location}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Localisation de l'objet"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
          Télécharger une image
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
              <Camera className="w-8 h-8" />
              <span className="mt-2 text-base leading-normal">
                Select a file
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import NavBar from '../../components/navbar/NavBar';

export default function Profile() {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div>
        <NavBar/>
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Mon Profil
          </h1>
          <p className="mt-4 text-gray-500">
            Gérez les informations de votre profil.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-md space-y-4">
          <div className="flex flex-col items-center">
            <img
              alt="User avatar"
              src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <button
              className="mt-2 text-sm text-green-500 underline"
              onClick={() => setIsEditing(true)}
            >
              Modifier la photo
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <label className="sr-only">Nom complet</label>
              <input
                type="text"
                name="fullName"
                placeholder='Nom Complet'
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-md outline-green-600"
                value={profileData.fullName}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                placeholder='user@example.com'
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-md outline-green-600"
                value={profileData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="sr-only">Téléphone</label>
              <input
                type="text"
                name="phone"
                placeholder='+216-50-100-123'
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-md outline-green-600"
                value={profileData.phone}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="flex items-center justify-between">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    className="inline-block rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white hover:bg-red-600"
                    onClick={() => setIsEditing(false)}
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-green-600"
                    onClick={handleSave}
                  >
                    Enregistrer
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-green-600"
                  onClick={() => setIsEditing(true)}
                >
                  Modifier
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Background"
          src="../src/assets/img/img1.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
    </div>
  );
}

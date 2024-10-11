import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <section className="flex items-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
				404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">La page que vous demandez n'existe pas.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">Vous pouvez retourner sur la page d'accueil</p>
			<Link to={"/home"} className="px-8 py-3 font-semibold rounded bg-green-500 text-gray-50 hover:bg-green-600">Page d'accueil</Link>
		</div>
	</div>
</section>
  )
}

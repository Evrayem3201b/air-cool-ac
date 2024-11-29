export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} AirCon Co. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
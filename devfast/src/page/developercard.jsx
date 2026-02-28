
import { CheckCircle, Mail } from "lucide-react";

export default function DeveloperCard() {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/developer_photo.png"
          alt="Developer"
          className="w-44 h-44 rounded-full border-4 border-blue-500 shadow-xl"
        />
        <div className="text-left flex-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Ejemar Maloloy-on</h3>
          <p className="text-slate-600 mb-2 font-medium">Full-Stack Web Developer</p>
          <p className="text-slate-600 mb-4 leading-relaxed">
            I build fast, modern, and high-converting websites for startups and small businesses.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <a
              href="https://devwezardtech.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-500 shadow-lg transition"
            >
              <span className="mr-2">Portfolio</span>
              <CheckCircle className="w-4 h-4" />
            </a>

            <div
              onClick={() =>
              window.location.assign(
                "mailto:ejemarmaloloyon007@gmail.com?subject=Project Inquiry&body=Hi, I would like to start a project with you."
              )
            }
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-slate-900 rounded-2xl font-semibold hover:bg-gray-300 shadow-md transition"
            >
              <Mail className="mr-2 w-4 h-4" />
              Email Me
            </div>
            <a
          href="https://m.me/maloloyon.ejemar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-2xl font-semibold hover:bg-green-600 transition"
        >
          Messenger
        </a>
          </div>
          <p className="mt-4 text-slate-500 text-sm">📞 +63 970 450 5022</p>
        </div>
      </div>
    </section>
  );
}
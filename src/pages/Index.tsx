import { useState } from "react";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    title: "Ловушка",
    author: "Роберт Голд",
    category: "Художественная литература",
    description: "Роман в письмах. Перевод ненависти — экспрессивная обложка в контрастном красно-чёрном решении с авторской графикой.",
    image: "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/bucket/5cf1fa0f-1fd8-462e-9215-1484e7a6a82b.png",
    tags: ["Обложка", "Типографика", "Художественная проза"],
  },
  {
    id: 2,
    title: "Бумажный зонтик",
    author: "Марина Бородицкая",
    category: "Детская книга",
    description: "Стихи для всей семьи. Яркие иллюстрации карандашом, игривая многоцветная типографика, тёплая атмосфера.",
    image: "https://cdn.poehali.dev/files/562bcabf-64ae-489d-a4c3-6f1ddaf02185.jpg",
    tags: ["Иллюстрация", "Детская книга", "Вёрстка"],
  },
  {
    id: 3,
    title: "Северное сияние",
    author: "Филип Пулман",
    category: "Фэнтези",
    description: "Серия из трёх частей. Акварельный стиль в бирюзовых тонах, авторские иллюстрации и сложная полиграфическая вёрстка.",
    image: "https://cdn.poehali.dev/files/875a9a28-aa4b-4efd-9739-82eef7f95b7c.jpg",
    tags: ["Иллюстрация", "Серийное оформление", "Обложка"],
  },
  {
    id: 4,
    title: "Рыбка Поньо на утёсе",
    author: "Неофициальный артбук",
    category: "Артбук",
    description: "Горизонтальный формат, насыщенные акварельные развороты и карандашные скетчи — оформление в духе Studio Ghibli.",
    image: "https://cdn.poehali.dev/files/464a0f59-3e6f-4b5b-933d-5025628483e5.png",
    tags: ["Артбук", "Иллюстрация", "Дизайн разворотов"],
  },
  {
    id: 5,
    title: "Размышления",
    author: "О. Михайлишин",
    category: "Поэзия",
    description: "Минималистичное оформление для лирической прозы. Сдержанная палитра, строгая типографика, элегантный переплёт.",
    image: "https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/bucket/5cf1fa0f-1fd8-462e-9215-1484e7a6a82b.png",
    tags: ["Поэзия", "Минимализм", "Обложка"],
  },
];

const allTags = ["Все", "Обложка", "Иллюстрация", "Детская книга", "Артбук", "Типографика", "Вёрстка"];

export default function Index() {
  const [activeTag, setActiveTag] = useState("Все");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeSection, setActiveSection] = useState<"portfolio" | "about">("portfolio");

  const filtered = activeTag === "Все"
    ? projects
    : projects.filter(p => p.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1a1a1a] font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F2]/90 backdrop-blur-sm border-b border-[#e0dbd4]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold tracking-tight">Анна Орлова</span>
            <span className="ml-2 text-sm text-[#888] hidden sm:inline">— книжный дизайнер</span>
          </div>
          <nav className="flex gap-1">
            <button
              onClick={() => setActiveSection("portfolio")}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeSection === "portfolio"
                  ? "bg-[#1a1a1a] text-white"
                  : "text-[#666] hover:text-[#1a1a1a]"
              }`}
            >
              Работы
            </button>
            <button
              onClick={() => setActiveSection("about")}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeSection === "about"
                  ? "bg-[#1a1a1a] text-white"
                  : "text-[#666] hover:text-[#1a1a1a]"
              }`}
            >
              О себе
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Portfolio Section */}
        {activeSection === "portfolio" && (
          <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero */}
            <div className="mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c0392b] font-medium mb-3">Портфолио</p>
              <h1 className="text-4xl md:text-6xl font-light leading-[1.1] mb-4 tracking-tight">
                Книги, которые<br />
                <em className="not-italic font-semibold">хочется держать</em>
              </h1>
              <p className="text-[#666] text-lg max-w-xl leading-relaxed">
                Дизайн обложек, иллюстрации и вёрстка книг — от детских сборников до серьёзной прозы.
              </p>
            </div>

            {/* Filter tags */}
            <div className="flex gap-2 flex-wrap mb-10">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                    activeTag === tag
                      ? "bg-[#c0392b] text-white border-[#c0392b]"
                      : "border-[#d5cfc8] text-[#666] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(project => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-[#f0ece6]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-[#c0392b] uppercase tracking-widest mb-1">{project.category}</p>
                    <h3 className="font-semibold text-lg leading-tight mb-1">{project.title}</h3>
                    <p className="text-sm text-[#888]">{project.author}</p>
                    <div className="flex gap-1 flex-wrap mt-3">
                      {project.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-xs bg-[#f0ece6] text-[#666] px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#c0392b] font-medium mb-3">О себе</p>
                <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 tracking-tight">
                  Дизайнер,<br />влюблённый<br />
                  <em className="not-italic font-semibold">в книги</em>
                </h2>
                <div className="space-y-5 text-[#444] leading-relaxed text-base">
                  <p>
                    Занимаюсь книжным дизайном более 8 лет. За это время оформила более 60 книг — от детских иллюстраций до серьёзной художественной прозы.
                  </p>
                  <p>
                    Каждая книга для меня — отдельная история. Ищу форму, которая отражает содержание: шрифт, цвет, фактуру. Работаю как с крупными издательствами, так и с авторами напрямую.
                  </p>
                  <p>
                    Умею слышать автора и переводить идеи в визуальный язык — так, чтобы обложка становилась частью книги, а не просто её упаковкой.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6">
                  {[
                    { num: "60+", label: "книг оформлено" },
                    { num: "8", label: "лет опыта" },
                    { num: "12", label: "издательств" },
                  ].map(stat => (
                    <div key={stat.label}>
                      <div className="text-3xl font-semibold text-[#c0392b]">{stat.num}</div>
                      <div className="text-sm text-[#888] mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 space-y-3">
                  <p className="text-sm font-medium text-[#1a1a1a]">Специализация:</p>
                  {["Дизайн обложек", "Книжная иллюстрация", "Вёрстка и типографика", "Серийное оформление"].map(s => (
                    <div key={s} className="flex items-center gap-3 text-sm text-[#555]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c0392b] flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-[#1a1a1a] text-white text-sm rounded-full hover:bg-[#c0392b] transition-colors"
                >
                  <Icon name="Mail" size={16} />
                  Написать мне
                </a>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#f0ece6]">
                  <img
                    src="https://cdn.poehali.dev/projects/ace5ea6d-f209-4135-973f-ef30a20a554a/bucket/5cf1fa0f-1fd8-462e-9215-1484e7a6a82b.png"
                    alt="Работы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden aspect-square bg-[#f0ece6]">
                    <img
                      src="https://cdn.poehali.dev/files/562bcabf-64ae-489d-a4c3-6f1ddaf02185.jpg"
                      alt="Работа 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-square bg-[#f0ece6]">
                    <img
                      src="https://cdn.poehali.dev/files/464a0f59-3e6f-4b5b-933d-5025628483e5.png"
                      alt="Работа 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[3/4] md:aspect-auto bg-[#f0ece6] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <p className="text-xs text-[#c0392b] uppercase tracking-widest">{selectedProject.category}</p>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f0ece6] hover:bg-[#e0dbd4] transition-colors"
                    >
                      <Icon name="X" size={14} />
                    </button>
                  </div>
                  <h2 className="text-2xl font-semibold mb-1">{selectedProject.title}</h2>
                  <p className="text-[#888] text-sm mb-6">{selectedProject.author}</p>
                  <p className="text-[#444] leading-relaxed text-sm">{selectedProject.description}</p>
                  <div className="flex gap-2 flex-wrap mt-6">
                    {selectedProject.tags.map(t => (
                      <span key={t} className="text-xs bg-[#f0ece6] text-[#555] px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 w-full py-3 border border-[#d5cfc8] text-sm rounded-xl hover:bg-[#f0ece6] transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#e0dbd4] mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#888]">© 2026 Анна Орлова — книжный дизайнер</p>
          <div className="flex gap-4">
            <a href="mailto:hello@example.com" className="text-sm text-[#888] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5">
              <Icon name="Mail" size={14} />
              Написать
            </a>
            <a href="#" className="text-sm text-[#888] hover:text-[#1a1a1a] transition-colors flex items-center gap-1.5">
              <Icon name="Instagram" size={14} />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import "./App.css"
function App() {
    const myProjects = [
   {
  id: 1,
  title: "استنساخ منصة أمازون الرقمية (Amazon Clone)",
  description: "تطوير واجهة متكاملة تحاكي منصة أمازون العالمية باستخدام React.js. ركزت في المشروع على بناء الهيكل البرمجي المعقد للشريط العلوي (Navbar)، تصميم شبكة عرض المنتجات التفاعلية بـ CSS Grid، وعرض خدمات البث الرقمي بأسلوب عصري ومطابق تماماً للمنصة الأصلية.",
  tags: ["React.js", "CSS Grid", "Flexbox", "Responsive Design"],
  liveLink: "https://your-live-link.com", // ضع رابط موقعك هنا بعد رفعه
  githubLink: "https://github.com" // ضع رابط المستودع هنا
}
,
    {
      id: 2,
      title: "اسم مشروعك الثاني (مثلاً: متجر إلكتروني)",
      description: "تطبيق ويب متجاوب بالكامل يحتوي على سلة مشتريات وتصفح ذكي للمنتجات مع إدارة الحالات.",
      tags: ["JavaScript ES6", "CSS Grid", "Fetch API"],
      liveLink: "#", 
      githubLink: "#"
    },
    {
      id: 3,
      title: "اسم مشروعك الثالث الحقيقي",
      description: "لوحة تحكم ذكية لإدارة البيانات واستعراض التقارير والمخططات البيانية التفاعلية.",
      tags: ["React.js", "Chart.js", "Local Storage"],
      liveLink: "#",
      githubLink: "#"
    }
  ];
  return (
    <div className="portfolio-container">
      {/* 1. شريط التنقل (Navbar) */}
      <nav className="navbar">
        <div className="logo"> hanaa alsari/هناء الصاري</div>
        <ul className="nav-links">
          <li><a href="#hero">الرئيسية</a></li>
          <li><a href="#projects">مشاريعي</a></li>
          <li><a href="#skills">مهاراتي</a></li>
          <li><a href="#contact">تواصل معي</a></li>
        </ul>
      </nav>

      {/* 2. القسم الترحيبي (Hero Section) */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>مهندسة برمجيات متقنة لواجهات رقمية استثنائية</h1>
          <p>
             (Frontend Engineer)  اهلاً بك، أنا مهندسة برمجيات متخصصة في تطوير الواجهات الأمامية
        

             . لا تقتصر مهاراتي على كتابة الكود البرمجي فحسب، بل أركز على بناء واجهات تفاعلية ذكية، سريعة الاستجابة، ومبنية على أسس برمجية متينة تضمن أقصى درجات الأداء النظيف والتجربة المثالية للمستخدم.

          </p>
          <a href="#projects" className="btn-primary">استعرض أعمالي</a>
          {/* 3. قسم المهارات البرمجية */}
<section id="skills" className="skills-section">
  <div className="skills-container">
    <h2 className="section-title">الأدوات والتقنيات البرمجية</h2>
    <p className="section-subtitle">الترسانة التقنية التي أعتمد عليها لبناء واجهات ويب ذكية وقابلة للتوسع</p>
    
    <div className="skills-grid">
      <div className="skill-badge">HTML5 / CSS3</div>
      <div className="skill-badge">JavaScript (ES6+)</div>
      <div className="skill-badge">React.js</div>
      <div className="skill-badge">Vite & Bundlers</div>
      <div className="skill-badge">Git & GitHub</div>
      <div className="skill-badge">Responsive Design</div>
      <div className="skill-badge">RESTful APIs</div>
      <div className="skill-badge">Software Architecture</div>
    </div>
  </div>
</section>
{/* 4. قسم معرض الأعمال والمشاريع */}
<section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">معرض المشاريع والأعمال</h2>
          <p className="section-subtitle">نماذج من حلول برمجية وواجهات تفاعلية قمت ببنائها وهندستها بالكامل</p>

          <div className="projects-grid">
            {/* دالة الخريطة لتوليد الكروت تلقائياً بناءً على مصفوفتك */}
            {myProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  {/* تكرار شارات التقنيات المستخدمة لكل مشروع */}
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                  
                  {/* روابط المعاينة والكود البرمجي */}
                  <div className="project-links">
                    <a href="https://amazon-clone-git-main-hanaa-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="link-live">
                      معاينة حية ↗
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-github">
                      الكود البرمجي
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* 5. قسم تواصل معي */}
<section id="contact" className="contact-section">
  <div className="contact-container">
    <h2 className="section-title">دعنا نبني شيئاً رائعاً معاً</h2>
    <p className="section-subtitle">هل لديك فكرة مشروع، أو فرصة عمل، أو ترغب فقط في إلقاء التحية؟ أرسل رسالتك فوراً</p>

    <div className="contact-content">
      <form className="contact-form" onSubmit={(e) => e.preventDefault()} action={"https://formspree.io/f/mrpedlqb"}  method="POST">
        <div className="form-group">
          <label htmlFor="name">الاسم الكريم</label>
          <input type="text" id="name" placeholder="أدخل اسمك هنا" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input type="email" id="email" placeholder="name@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">تفاصيل رسالتك أو مشروعك</label>
          <textarea id="message" rows="5" placeholder="اكتب تفاصيل مشروعك أو استفسارك هنا..." required></textarea>
        </div>

        <button type="submit" className="btn-submit">إرسال الرسالة ⚡</button>
      </form>
    </div>
  </div>

  {/* تذييل الصفحة (Footer) */}
  <footer className="footer">
    <p>© {new Date().getFullYear()} - تم تطويره وهندسته بكل شغف بواسطة مهندس البرمجيات</p>
  </footer>
</section>

        </div>
      </section>
    </div>
  );
}

export default App;


import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color: "blue",
      tag: "satisfied"
    },
    {
      img: "https://images.unsplash.com/photo-1588534331431-95ee61de0302?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHx3b3JraW5nfGVufDB8fDB8fHww",
      intro: "",
      color: "green",
      tag: "underserved"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1676651178980-afc60b57475b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHx3b3JraW5nfGVufDB8fDB8fHww",
      intro: "",
      color: "Turquoise",
      tag: "Underbanked"
    },
    {
      img: "https://images.unsplash.com/photo-1633113215719-e9cc39f594b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHx3b3JraW5nfGVufDB8fDB8fHww",
      intro: "",
      color: "Violet",
      tag: "Underbreak"
    },
    {
      img: "https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ1fHx3b3JraW5nfGVufDB8fDB8fHww",
      intro: "",
      color: "#DFFF00",
      tag: "Underbreak"
    },
  ]
  return (
    <div>
      <Section1 users ={users} />
      <Section2 />
    </div>
  )
}

export default App

import Box from "./components/Box"

const App = (props) => {
  return (
    <div className="main">
      <Box image="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png" company="Amazon" day="5" role="Senior UI/UX Designer" tag1="Part-time" tag2="Senior-level" cost="120/hr" adress="San Frascuso, CA"/>
      <Box image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" company="Google" day="30" role="Grapic Designer" tag1="Full-time" tag2="Flexible schedule" cost="150-220k" adress="Mountain View, CA"/>
      <Box image="https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-1-logo-png-transparent.png" company="Dribble" day="18" role="Senior Motion Designer" tag1="Contract" tag2="Remote" cost="85/hr" adress="San Frascuso, CA"/>
      <Box image="https://www.citypng.com/public/uploads/preview/facebook-meta-logo-icon-hd-png-701751694777703xqxtpvbu9q.png" company="Meta" day="29" role="UX Designer" tag1="Full-time" tag2="In office" cost="200-250k" adress="New York, NY"/>
      <Box image="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" company="hackerRank" day="2" role="SDE1" tag1="Intern" tag2="Remote" cost="50/hr" adress="San Frascuso, CA"/>
      <Box image="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2ZpbmNlbnQuanBn.webp" company="Fincent" day="7" role="Graphic
       Designer" tag1="Full-time" tag2="Flexible" cost="85-120k" adress="Cupertino, CA"/>
      <Box image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s" company="Apple" day="6" role="SDE2" tag1="Full-time" tag2="Contract" cost="200-260k" adress="Silicon valley, US"/>
    </div>
  )
}

export default App
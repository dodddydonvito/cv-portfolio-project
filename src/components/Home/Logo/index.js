// import './index.scss'
// import LogoDON from '../../../assets/images/logo-D.png'
// import { useEffect, useRef } from 'react'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import gsap from 'gsap-trial'

// const Logo = () => {
//   const bgRef = useRef()
//   const outlineLogoRef = useRef()
//   const solidLogoRef = useRef()

//   useEffect(() => {
//     gsap.registerPlugin(DrawSVGPlugin)

//     gsap
//       .timeline()
//       .to(bgRef.current, {
//         duration: 1,
//         opacity: 1,
//       })
//       .from(outlineLogoRef.current, {
//         drawSVG: 0,
//         duration: 20,
//       })

//     gsap.fromTo(
//       solidLogoRef.current,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         delay: 4,
//         duration: 4,
//       }
//     )
//   }, [])

//   return (
//     <div className="logo-container" ref={bgRef}>
//       <img ref={solidLogoRef} className="solid-logo" src={LogoDON} alt="DON" />

//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         version="1.1"
//         height="100px"
//         width="200px"
//         viewBox="0 0 100 200"
//       >
//         <g
//           className="svg-container"
//           transform="translate(0 500) scale(.1 -.1)"
//           fill="none"
//         >
//           <path
//             // ref={outlineLogoRef}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#16203A"
//             opacity="1.000000"
//             stroke="none"
//             d=" M290.543549,151.027710   C290.543549,151.027710 290.517883,150.964401 290.732117,151.333588   C291.799438,151.844879 292.652557,151.986984 293.505646,152.129089   C301.045135,156.423279 308.584656,160.717468 316.658264,165.374115   C317.790314,165.855377 318.388214,165.974182 318.986145,166.093002   C318.986145,166.093002 318.984985,166.019180 318.808014,166.371033   C333.404510,179.034378 343.028290,194.646194 348.064606,213.104752   C355.064514,238.759857 355.380249,264.671600 350.368561,290.673889   C346.432953,311.092834 337.901245,329.168488 322.160492,343.286041   C302.490540,360.927521 278.579102,367.817719 252.976517,368.835083   C228.379089,369.812469 203.722565,369.296021 179.092178,369.464172   C177.280640,369.476532 175.470627,369.717102 173.659912,369.851593   C169.274155,369.851593 164.888382,369.851593 159.843033,369.851593   C159.843033,367.139832 159.843033,365.081390 159.852798,362.122986   C159.862564,288.950043 159.862564,216.677094 159.862564,144.004761   C171.384674,144.004761 182.348633,143.899368 193.309891,144.026978   C215.298035,144.282928 237.315140,144.089340 259.258759,145.247498   C269.759460,145.801727 280.119690,149.017441 290.543549,151.027710  M274.766937,189.273819   C271.642395,187.843155 268.639740,185.987000 265.373352,185.051559   C245.661758,179.406418 225.452042,181.843552 205.405045,181.671280   C205.143265,181.669022 204.878281,182.037857 204.473984,182.338013   C204.418701,183.379272 204.304550,184.529160 204.304321,185.679062   C204.295395,230.746567 204.293945,275.814087 204.311172,320.881592   C204.311676,322.200592 204.523285,323.519501 204.377991,325.703552   C204.377991,327.653839 204.377991,329.604095 204.377991,333.027985   C223.602158,331.924103 242.532303,332.327423 260.933990,329.404114   C284.074219,325.728088 298.483337,310.871368 304.189240,287.848572   C308.211731,271.618195 308.624084,255.223145 306.715454,238.758102   C305.347137,226.953995 302.562805,215.421112 295.448090,205.570999   C290.278381,198.413651 284.595703,191.631241 274.766937,189.273819  z"
//           />
//           <path
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#FC04FC"
//             opacity="1.000000"
//             stroke="none"
//             d=" M173.669540,370.315399   C175.470627,369.717102 177.280640,369.476532 179.092178,369.464172   C203.722565,369.296021 228.379089,369.812469 252.976517,368.835083   C278.579102,367.817719 302.490540,360.927521 322.160492,343.286041   C337.901245,329.168488 346.432953,311.092834 350.368561,290.673889   C355.380249,264.671600 355.064514,238.759857 348.064606,213.104752   C343.028290,194.646194 333.404510,179.034378 318.774109,166.385620   C323.778442,169.092789 329.059479,171.632736 333.429199,175.268066   C353.503601,191.968613 362.586426,214.494217 365.850006,239.625778   C368.389801,259.183563 367.909576,278.732666 364.197021,298.239899   C356.480133,338.787323 327.258331,367.613312 286.154846,373.817657   C274.022491,375.649017 261.661438,376.489197 249.384720,376.727234   C226.239960,377.175934 203.080338,376.857422 179.926895,376.857849   C178.115280,376.857880 176.303665,376.857849 173.949280,376.857849   C173.849503,374.612183 173.764328,372.695709 173.669540,370.315399  z"
//           />
//           <path
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#01FCFD"
//             opacity="1.000000"
//             stroke="none"
//             d=" M290.391907,150.677261   C280.119690,149.017441 269.759460,145.801727 259.258759,145.247498   C237.315140,144.089340 215.298035,144.282928 193.309891,144.026978   C182.348633,143.899368 171.384674,144.004761 159.862564,144.004761   C159.862564,216.677094 159.862564,288.950043 159.774460,361.695801   C155.363831,362.168579 151.041306,362.168579 146.366150,362.168579   C146.366150,287.153229 146.366150,212.406143 146.366150,137.242035   C147.454361,137.121185 148.705872,136.859451 149.957001,136.861252   C178.622803,136.902283 207.294281,136.646622 235.952271,137.151382   C254.912552,137.485321 273.325226,141.075562 290.391907,150.677261  z"
//           />
//           <path
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#01FCFD"
//             opacity="1.000000"
//             stroke="none"
//             d=" M293.160522,151.885071   C292.652557,151.986984 291.799438,151.844879 290.698639,151.340439   C291.239105,151.199081 292.027252,151.420074 293.160522,151.885071  z"
//           />
//           <path
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#FC04FC"
//             opacity="1.000000"
//             stroke="none"
//             d=" M318.889130,165.750916   C318.388214,165.974182 317.790314,165.855377 317.001465,165.427460   C317.471100,165.215179 318.131592,165.312012 318.889130,165.750916  z"
//           />
//           <path
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#02FCFD"
//             opacity="1.000000"
//             stroke="none"
//             d=" M275.154724,189.857697   C284.595703,191.631241 290.278381,198.413651 295.448090,205.570999   C302.562805,215.421112 305.347137,226.953995 306.715454,238.758102   C308.624084,255.223145 308.211731,271.618195 304.189240,287.848572   C298.483337,310.871368 284.074219,325.728088 260.933990,329.404114   C242.532303,332.327423 223.602158,331.924103 204.377991,333.027985   C204.377991,329.604095 204.377991,327.653839 204.925613,325.271851   C209.678894,324.768097 213.884537,324.696045 218.529388,324.710724   C227.086319,324.200897 235.303268,324.208221 243.303024,322.893707   C266.591339,319.067047 283.286530,306.785156 289.683624,283.311218   C295.555054,261.766357 295.680145,239.931442 290.276154,218.200684   C287.677673,207.751602 283.535156,198.051270 275.009552,190.610703   C275.066254,190.188629 275.110504,190.023163 275.154724,189.857697  z"
//           />
//           <path
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#F703F9"
//             opacity="1.000000"
//             stroke="none"
//             d=" M218.090195,324.623993   C213.884537,324.696045 209.678894,324.768097 205.054840,324.839294   C204.523285,323.519501 204.311676,322.200592 204.311172,320.881592   C204.293945,275.814087 204.295395,230.746567 204.304321,185.679062   C204.304550,184.529160 204.418701,183.379272 204.473984,182.338013   C204.878281,182.037857 205.143265,181.669022 205.405045,181.671280   C225.452042,181.843552 245.661758,179.406418 265.373352,185.051559   C268.639740,185.987000 271.642395,187.843155 274.960815,189.565765   C275.110504,190.023163 275.066254,190.188629 274.601807,190.633820   C255.671692,189.921997 237.161774,188.930435 218.090195,187.908768   C218.090195,234.494339 218.090195,279.559174 218.090195,324.623993  z"
//           />
//         </g>
//       </svg>
//     </div>
//   )
// }

// export default Logo
import React, { Component } from 'react';
import "./Ani_Ger.css"

class Ani_Ger extends Component {
  constructor(props) {
    super(props);
    this.state = {
            licz: 0
        }
    }
    start = (e) =>{ // Event 6
        console.log(e)
    }
    koniec = (e) =>{ // Event 8
        e.target.classList.add("szary")
        console.log(e.target.classList)
    }

    licznik_ugryzien = () => { //Event 7
        this.setState({licz:(this.state.licz+1)})
    }

  render() {
      return (
        <div className='Ani_Ger'>
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="animacja">
                <mask id="mask0_1_42"  maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="300">
                <rect id="tlo" width="300" height="300" rx="150" fill="#C4C4C4"/>
                </mask>
                <g mask="url(#mask0_1_42)">
                <rect id="Rectangle 2" y="-7" width="237" height="162" fill="#D6D6D6"/>
                <path id="Rectangle 1" d="M-41.4583 154.648C84.1853 122.758 152.318 97.983 258.181 7.05954L366.003 225.964L66.3644 373.553L-41.4583 154.648Z" fill="#C4C4C4"/>
                <path id="Rectangle 3" d="M83.4007 297.846C165.025 225.93 212.214 208.273 297.825 199.757L321.967 252.532L107.543 350.621L83.4007 297.846Z" fill="#838383"/>
                <g id="calosc">
                <g id="lotos" onAnimationEnd={this.koniec}>
                <path id="lisc_4" d="M119 242.933H155L120 254.933L112 248.933L119 242.933Z" fill="black"/>
                <path id="lisc_3" d="M92.5 256.933C100.917 262.954 102.182 269.01 102.5 277.433L87.5 259.933C87.8542 257.07 88.7517 256.204 92.5 256.933Z" fill="black"/>
                <path id="lisc_2" d="M49 224.933C58.1841 226.471 62.8822 228.42 70 234.933C69.9787 238.741 69.1227 239.834 66.5 240.433C60.7804 234.628 56.8163 231.095 49 224.933Z" fill="black"/>
                <path id="lisc_1" d="M97 185.433V226.433C90.2876 232.484 86.9544 232.651 84.5 223.933C87.7909 204.448 90.6227 196.283 97 185.433Z" fill="black"/>
                <path id="korzen" d="M50.5 173.933C85.5 250.933 85.5 245.933 154.5 211.433C152.807 215.959 148.304 220.76 109.5 248.933C126.175 262.051 141.906 265.547 175.5 268.433C140.363 271.857 121.003 270.485 87.5 252.433C65.2743 250.694 56.0855 248.366 44 242.433C54.9175 243.668 61.6392 243.143 74.5 240.433C57.6801 213.102 53.918 198.734 50.5 173.933Z" fill="black"/>
                </g>
                <g id="Ptak">
                <path id="d_kreska" d="M66.9378 91.4326C70.0094 90.7625 70.879 91.7167 70.5 96.4326C52.1821 119.883 51.4778 124.781 48 135.433C50.5061 114.981 53.9879 104.903 66.9378 91.4326Z" fill="black"/>
                <path id="g_kreska" d="M121 52.9326C159.753 39.3635 176.977 45.106 207.5 55.9326C177.127 52.8504 160.183 51.6673 131.5 59.4326L121 52.9326Z" fill="black"/>
                <path id="ptak" d="M70 65.6784C89.8585 64.4324 98.6393 67.8729 112.5 77.1784C125.616 76.6904 130.176 77.7396 135 81.1784L137 82.6784C139.46 91.7625 140.485 94.7431 142 98.1784C142 98.1784 130.5 93.6784 126 94.6784C121.5 95.6784 109.137 108.197 93.5 112.678C83.7837 122.48 77.4898 138.281 66 169.678C66.9614 154.566 68.9475 145.971 78 130.178C78.8702 125.845 78.7535 124.37 77 124.178C60.8449 125.568 52.3507 138.994 37.5 169.678C45.4518 138.027 54.7348 126.132 78 113.678C80.3383 113.09 82 105.178 88 95.6784C85.5 94.1784 75.5 95.6784 75.5 95.6784C73.4466 94.6181 72.8317 93.2436 72.5 89.6784C74.5536 88.0123 75.862 87.1292 75.5 84.6784C71.4854 85.6407 69.6061 85.6671 67 84.6784C52.1807 77.3729 42.4095 75.6523 24 74.1784C30.5097 68.1682 40.7515 65.9946 70 65.6784Z" fill="black"/>
                <path id="skrzyd&#197;&#130;o" d="M78 52.558C94.9187 51.3523 121 59.058 123.5 66.558C123.5 66.558 125.5 74.058 117.5 73.558C109.5 73.058 111.5 68.558 103.5 66.058C100.24 58.447 94.2232 55.6425 78 52.558Z" fill="black"/>
                </g>
                <g id="wilk">
                <path id="siersc" d="M205 249.433C225.5 248.933 239 211.933 249.5 212.933C243.5 230.933 235 246.433 221 256.933C207.16 265.38 199.741 268.84 188 269.433C195.969 262.974 199.661 258.563 205 249.433Z" fill="black"/>
                <path id="d_szcenka" d="M166 134.433C169.313 128.43 171.377 129.214 175 129.433H184L185 149.933C197.782 161.492 202.183 167.428 202 176.433H183V180.433C175.303 182.676 171.095 184.878 164 192.433C162.994 198.37 161.623 200.927 153.5 200.933C146.633 200.957 144.134 200.143 145 195.433C140.566 193.304 139.344 191.837 138.5 188.933C141.739 190.639 143.634 191.385 147.5 191.433L145 186.433C147.049 187.873 148.222 188.625 151 188.433V183.433C155.737 187.508 158.916 184.848 167.5 176.433C167.5 160.433 170.5 152.433 169.5 148.933C168 145.433 162 145.433 161.5 141.933L166 138.433C168.696 136.369 168.31 135.565 166 134.433Z" fill="black"/>
                <path id="g_szcenka" onAnimationIteration={this.licznik_ugryzien} d="M98 131.933C124.5 132.933 122 119.433 143 120.433L169 116.5L175 129.433L167 135.933C163.922 138.4 162.244 139.557 159.5 140.433C155 141.933 142.5 132.433 132.5 144.433V149.933C130.827 148.644 129.801 148.144 127.5 148.433V154.933C125.18 154.015 124.017 153.11 122.5 149.933C120.33 153.807 123.507 157.567 131 164.933C124.313 165.168 120.365 163.407 112.5 152.433C111.425 152.578 110.871 152.779 110 153.433C107.233 153.51 106.333 152.118 105.5 147.933C100.751 141.548 97.7017 137.939 98 131.933Z" fill="black"/>
                <path id="glowa" d="M176.5 91.9326C206.459 87.0161 213.742 75.1885 224 52.4326C240 72.4326 231 85.9326 233.5 86.4326C268.958 106.339 279.048 119.815 284 146.933C274.517 136.157 269.27 130.921 261 133.933C292.5 155.933 282.5 220.433 244.5 244.433C252.201 226.526 255.452 217.564 251 211.933C242 208.433 224.5 242.933 211 245.433C199.089 248.435 192.411 248.923 180.5 245.433C207.076 235.223 215.236 228.178 211 211.933C217.413 208.399 220.649 206.259 223 200.933C228.605 198.619 230.044 196.433 230.5 191.433C215.399 205.508 206.766 213.995 195.5 214.433C208 196.433 203 182.933 207 179.933C206.032 179.621 205.488 179.581 204.5 180.933C202.5 163.433 195.482 157.905 185 150.933L173 135.433L142 121.433C153.096 105.112 159.601 99.0586 172 96.9326C173.425 94.4647 174.473 93.467 176.5 91.9326Z" fill="black"/>
                <path id="cos" d="M184 138.433C185.909 133.895 187.621 132.303 192 131.433C190.296 132.197 190.3 133.881 189.333 134.614C188.367 135.348 190.999 136.624 192 136.524C187.999 136.76 185.206 136.574 184 138.433Z" fill="white"/>
                <path id="oko" onAnimationStart={this.start} d="M149.5 121.433C152.127 115.672 154.89 114.105 161 112.933C158.366 115.68 157.182 117.467 156 121.433H153H149.5Z" fill="white"/>
                </g>
                </g>
                </g>
                </g>
            </svg>

            <div className='licznik_ugryzien'>
                Ten wilk ugryz: {this.state.licz} razy <br/> Ale na żywo wystarczy, że ugryzie raz.
            </div>
        </div>
    );
  }
}
 
export default Ani_Ger;
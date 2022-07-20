import { Button } from "../../ui/Button";

export default function Header() {
  return (
    <div className="grid grid-cols-2 px-16 bg-white">
      <div id="header-text-container">
        <h1 className="pt-20 text-4xl font-bold text-gray-900">
          Unlock your economic potential with our expert personal coaches.
        </h1>

        <h2 className="pt-8">
          If you're looking a low-stress job that gives you the freedom you want
          and the salary you need to create a life you love - then reading this
          letter will be the best decision that you can make for your future
        </h2>

        <div className="pt-20">
          <Button label={"ENROLL NOW"} size="large" />
        </div>
      </div>
      <div id="header-image" className="flex items-center">
        <svg
          width="704"
          height="569"
          viewBox="0 0 704 569"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_4)">
            <path
              d="M158.461 287.775C149.503 287.174 145.33 288.916 142.636 290.69C141.771 291.26 140.918 291.927 140.112 292.648C144.183 284.394 148.354 276.178 152.604 268.018C152.631 269.114 152.826 269.633 153.308 269.893C154.41 270.488 156.981 268.585 162.078 264.755C165.952 261.845 166.447 261.107 166.735 260.601C167.748 258.823 167.662 257.358 167.037 250.972C165.917 239.508 165.628 238.432 166.171 235.726C166.358 234.794 166.869 232.547 166.507 232.419C166.134 232.286 165.555 234.643 163.494 236.18C161.485 237.678 160.072 236.904 158.246 237.869C155.887 239.116 155.237 242 154.26 246.641C153.395 250.752 153.616 252.206 153.1 259.951C152.954 262.145 152.816 263.852 152.721 265.196C148.916 272.466 145.182 279.788 141.515 287.139C141.565 286.937 141.612 286.747 141.652 286.581C142.787 281.934 142.409 279.79 141.838 278.283C140.915 275.842 139.079 274.381 135.445 271.558C131.884 268.791 128.871 267.199 125.251 265.307C120.506 262.827 118.134 261.587 117.49 261.949C115.874 262.859 116.114 267.629 117.464 273.596C114.392 272.012 112.76 271.27 112.243 271.56C112.021 271.685 111.835 271.886 111.681 272.15C109.384 272.037 106.339 272.167 102.855 272.624C105.604 271.631 108.693 270.321 112.021 268.534C114.906 266.985 116.345 266.198 116.207 265.547C115.713 263.217 96.0153 263.264 79.1299 272.119C71.1802 276.288 68.5365 279.954 67.1695 282.874C66.7305 283.812 66.3524 284.827 66.0425 285.863C65.1911 276.7 64.4434 267.517 63.7934 258.342C64.3906 259.261 64.8288 259.602 65.3754 259.572C66.6258 259.503 67.8207 256.537 70.1596 250.61C71.9374 246.104 71.9729 245.216 71.9537 244.635C71.8861 242.591 71.0455 241.387 67.1695 236.27C60.2127 227.086 59.4033 226.32 58.449 223.729C58.1204 222.837 57.3796 220.656 57.0032 220.736C56.6164 220.817 57.3568 223.128 56.4052 225.515C55.4776 227.842 53.8678 227.922 52.8171 229.698C51.4588 231.994 52.4153 234.791 54.0131 239.258C55.4281 243.213 56.3776 244.337 59.9933 251.207C61.0175 253.153 61.7932 254.681 62.4161 255.876C62.9792 264.059 63.6307 272.251 64.3545 280.432C64.2913 280.234 64.2315 280.048 64.1794 279.886C62.7133 275.333 61.268 273.703 59.9933 272.717C57.9281 271.119 55.5984 270.833 51.023 270.327C46.5395 269.83 43.1382 270.047 39.0626 270.327C33.7203 270.693 31.0491 270.876 30.6903 271.522C29.7057 273.292 33.0331 277.834 38.0051 282.693C33.9463 282.98 31.8773 283.192 31.5648 283.754C30.7478 285.223 32.9053 288.603 36.5001 292.486C34.0014 292.7 32.6835 292.925 32.4393 293.364C29.6964 298.297 60.3453 324.723 67.1244 319.654C67.6392 319.269 68.0039 318.703 68.255 318.015C68.366 318.947 68.4794 319.879 68.5927 320.811C60.5843 319.911 45.2002 322.322 36.0725 331.868C31.535 336.613 30.8511 340.709 30.6903 342.025C29.9772 347.861 32.8198 354.072 35.1782 354.529C35.8745 358.873 38.0564 362.467 39.847 362.435C42.092 362.396 41.6948 356.697 47.0232 350.486C50.7412 346.151 55.1626 343.997 57.7876 342.718C63.4256 339.972 66.7014 340.052 70.7627 337.815C70.8443 338.418 70.9312 339.02 71.0136 339.623C63.5742 340.87 55.0788 344.057 49.1899 350.215C44.6524 354.961 43.9685 359.057 43.8077 360.373C43.3684 363.968 44.2825 367.702 45.5981 370.153C42.0193 373.909 41.0299 377.83 39.0627 385.641C37.8058 390.631 38.0803 392.402 39.0627 393.408C39.875 394.241 41.1584 394.538 46.2389 394.006C51.7501 393.429 54.5057 393.141 57.0032 392.214C60.9539 390.747 63.6775 388.229 68.9636 383.251C71.1373 381.205 72.9753 379.466 74.4736 377.949C75.2532 378.215 75.9847 378.417 76.7236 378.563C76.8094 378.58 76.894 378.592 76.9795 378.608C78.3427 386.679 79.7831 394.727 81.2987 402.741C76.3681 403.84 72.1552 407.083 69.8403 411.75L51.5469 448.623C50.3921 450.95 49.7815 453.553 49.7815 456.151V550.965C49.7815 560.314 57.3937 567.919 66.7504 567.919H109.45C118.807 567.919 126.419 560.314 126.419 550.965V463.66C126.419 461.532 126.024 459.448 125.246 457.466L107.811 413.085C105.29 406.668 99.2661 402.49 92.3971 402.34C95.9587 392.952 99.6331 383.575 103.436 374.237C104.022 374.01 104.541 373.774 104.991 373.524C105.693 374.293 107.131 375.189 110.179 376.646C115.178 379.034 117.678 380.229 120.292 380.744C124.426 381.559 128.066 380.836 135.177 379.357C144.853 377.344 149.712 376.28 150.724 373.467C152.125 369.575 147.731 364.56 146.52 363.178C143.888 360.174 140.983 358.804 139.188 357.98C136.857 356.911 130.214 353.862 122.183 355.964C117.128 357.288 114.233 360.114 108.443 365.766C107.885 366.31 107.404 366.805 106.976 367.266C106.88 366.989 106.771 366.716 106.652 366.445C107.464 364.489 108.276 362.533 109.098 360.581C115.036 354.953 117.958 351.855 117.403 349.195C117.143 347.946 116.355 346.896 115.342 346.023C116.468 343.439 117.597 340.857 118.739 338.283C119.265 338.271 119.807 338.247 120.39 338.192C123.45 337.903 126.913 337.577 127.283 336.109C127.478 335.332 126.805 334.197 125.483 332.919C127.394 332.386 130.305 328.499 136.84 326.395C142.278 324.644 147.174 325.119 150.081 325.401C157.582 326.129 160.03 328.561 166.774 327.926C169.833 327.638 173.297 327.312 173.666 325.844C173.832 325.184 173.368 324.266 172.42 323.222C174.119 323.456 175.937 323.642 177.876 323.753C181.145 323.941 182.784 324.022 183.007 323.395C183.806 321.151 166.994 310.897 147.967 309.618C143.347 309.308 140.007 309.623 137.479 310.243C143.561 307.975 152.613 304.526 162.549 307.318C165.97 308.279 172.894 310.934 183.123 311.521C186.392 311.709 188.031 311.79 188.254 311.163C189.053 308.92 172.255 298.674 153.238 297.388C157.652 296.497 162.603 296.248 167.796 297.707C171.217 298.668 178.14 301.324 188.37 301.911C191.639 302.098 193.278 302.179 193.501 301.552C194.3 299.309 177.488 289.054 158.461 287.776L158.461 287.775ZM70.5635 327.062C70.8211 326.86 71.0737 326.657 71.3172 326.455C71.7537 327.095 72.2147 327.588 72.6757 327.9C72.7248 328.157 72.7775 328.41 72.8364 328.66C72.1868 328.591 71.4908 328.544 70.7539 328.519C70.6918 328.034 70.625 327.548 70.5635 327.062L70.5635 327.062ZM108.142 293.442C108.216 293.867 108.297 294.301 108.386 294.745C107.573 294.589 106.642 294.478 105.624 294.413C106.436 294.117 107.274 293.797 108.142 293.442ZM110.078 301.48C109.454 301.417 108.787 301.376 108.085 301.354C108.634 300.936 109.176 300.513 109.679 300.091C109.807 300.551 109.94 301.014 110.078 301.48ZM95.6822 315.325C102.121 312.303 105.456 312.947 110.735 308.983C111.226 308.614 111.73 308.235 112.219 307.854C113.97 312.521 116.067 316.972 118.227 320.199C112.179 317.148 103.869 314.669 95.6822 315.325ZM111.183 276.833C111.377 279.379 112.003 282.616 112.933 286.095C112.88 286.094 112.828 286.094 112.774 286.093C110.463 284.932 109.19 284.415 108.745 284.666C108.282 284.927 107.972 285.505 107.796 286.338C100.534 287.029 90.7453 289.246 81.7534 293.962C73.8036 298.131 71.16 301.796 69.793 304.717C69.2103 305.961 68.734 307.342 68.3843 308.728C68.205 307.12 68.0205 305.515 67.8472 303.904C71.7552 302.384 77.6637 287.711 92.2863 283.567C95.5979 282.629 102.548 281.318 111.183 276.833H111.183ZM68.6427 328.511C68.7504 328.433 68.8541 328.365 68.9636 328.283C69.1304 328.157 69.2987 328.031 69.4674 327.904C69.4927 328.103 69.52 328.302 69.5454 328.501C69.2488 328.501 68.9495 328.504 68.6427 328.511H68.6427ZM71.8816 337.148C72.3531 336.847 72.8334 336.523 73.336 336.146C74.0924 335.578 74.879 334.987 75.593 334.399C76.146 334.956 76.7129 335.282 77.2457 335.272C77.4542 335.269 77.6344 335.201 77.8041 335.104C77.3458 336.474 77.0758 337.816 76.9899 339.009C75.4854 339.062 73.8766 339.197 72.1951 339.437C72.0907 338.674 71.9845 337.911 71.8816 337.148ZM91.1237 402.325H85.0438C84.173 402.325 83.3156 402.395 82.4743 402.522C80.984 394.642 79.567 386.729 78.2242 378.794C81.7996 379.189 85.3671 378.474 91.6095 377.176C96.0324 376.256 99.4377 375.533 101.94 374.752C98.217 383.916 94.6142 393.115 91.1237 402.325ZM105.359 364.101C105.859 363.635 106.388 363.138 106.94 362.619C106.602 363.425 106.274 364.234 105.939 365.04C105.752 364.716 105.557 364.403 105.359 364.101ZM108.433 342.622C104.617 341.438 101.424 341.789 99.4626 342.025C97.0037 342.321 90.1572 343.16 84.5179 348.607C82.6355 348.557 80.5043 348.661 78.2334 348.946C79.4426 348.392 80.694 347.672 82.0809 346.631C84.5376 344.786 87.3189 342.697 86.8651 341.253C86.6555 340.586 85.7349 340.033 84.3116 339.637C85.9148 338.575 87.9062 337.481 90.4566 336.66C95.8948 334.909 100.791 335.384 103.698 335.666C109.99 336.277 112.734 338.081 117.434 338.273C116.401 340.603 115.381 342.941 114.361 345.28C112.179 343.792 109.483 342.948 108.433 342.622H108.433ZM122.27 330.399C122.311 330.308 122.352 330.216 122.393 330.124C122.718 330.086 123.04 330.046 123.353 330C123.375 330.472 123.436 330.898 123.53 331.278C123.138 330.987 122.713 330.694 122.27 330.399ZM132.142 312.533C132.113 312.552 132.085 312.574 132.055 312.594C132.125 312.344 132.19 312.104 132.253 311.87C132.789 311.796 133.401 311.645 134.085 311.436C133.353 311.786 132.711 312.158 132.142 312.533Z"
              fill="#F2F2F2"
            />
            <path
              d="M210.903 559.923L224.241 559.922L230.586 508.522L210.9 508.523L210.903 559.923Z"
              fill="#AF6359"
            />
            <path
              d="M256.6 559.621C257.015 560.32 257.235 562.575 257.235 563.388C257.235 565.886 255.208 567.911 252.708 567.911H211.402C209.696 567.911 208.314 566.529 208.314 564.825V563.107C208.314 563.107 206.27 557.943 210.477 551.578C210.477 551.578 215.706 556.562 223.519 548.756L225.823 544.586L242.5 556.772L251.744 557.909C253.767 558.158 255.56 557.871 256.6 559.621H256.6H256.6Z"
              fill="#2F2E41"
            />
            <path
              d="M284.36 559.923L297.698 559.922L304.043 508.522L284.358 508.523L284.36 559.923Z"
              fill="#AF6359"
            />
            <path
              d="M330.057 559.621C330.473 560.32 330.692 562.575 330.692 563.388C330.692 565.886 328.665 567.911 326.165 567.911H284.859C283.154 567.911 281.771 566.529 281.771 564.825V563.107C281.771 563.107 279.728 557.943 283.934 551.578C283.934 551.578 289.163 556.562 296.976 548.756L299.28 544.586L315.957 556.772L325.201 557.909C327.224 558.158 329.017 557.871 330.057 559.621H330.057H330.057Z"
              fill="#2F2E41"
            />
            <path
              d="M279.002 150.756C279.002 150.756 294.364 143.766 304.173 150.756C313.982 157.746 322.727 220.653 312.233 231.137C301.739 241.622 284.249 218.032 284.249 218.032L279.002 150.756Z"
              fill="#AF6359"
            />
            <path
              d="M220.943 151.588C220.943 151.588 205.581 144.599 195.772 151.588C185.964 158.578 177.219 221.485 187.713 231.97C198.206 242.454 215.696 218.864 215.696 218.864L220.943 151.588Z"
              fill="#AF6359"
            />
            <path
              d="M221.38 228.912C221.38 228.912 216.133 252.502 210.012 262.986L254.611 289.198L289.591 266.481C289.591 266.481 272.975 239.396 275.599 231.533L221.38 228.912Z"
              fill="#AF6359"
            />
            <path
              d="M525.242 557.304L508.114 557.302L499.966 491.294L525.246 491.295L525.242 557.304Z"
              fill="#AF6359"
            />
            <path
              d="M466.558 556.916C466.025 557.813 465.743 560.71 465.743 561.753C465.743 564.961 468.346 567.561 471.557 567.561H524.602C526.792 567.561 528.568 565.787 528.568 563.599V561.392C528.568 561.392 531.192 554.761 525.789 546.587C525.789 546.587 519.075 552.987 509.041 542.963L506.083 537.608L484.665 553.257L472.794 554.717C470.197 555.037 467.894 554.668 466.558 556.916H466.558Z"
              fill="#2F2E41"
            />
            <path
              d="M578.188 557.304L561.06 557.302L552.912 491.294L578.192 491.295L578.188 557.304Z"
              fill="#AF6359"
            />
            <path
              d="M519.504 556.916C518.971 557.813 518.689 560.71 518.689 561.753C518.689 564.961 521.292 567.561 524.503 567.561H577.548C579.738 567.561 581.513 565.787 581.513 563.599V561.392C581.513 561.392 584.138 554.761 578.735 546.587C578.735 546.587 572.02 552.987 561.987 542.963L559.028 537.608L537.611 553.257L525.74 554.717C523.143 555.037 520.84 554.668 519.504 556.916H519.504Z"
              fill="#2F2E41"
            />
            <path
              d="M489.608 176.519C489.608 176.519 487.127 192.472 490 202.767L447.813 277.51L464.224 289.46L519.028 220.568L526.623 186.529L489.608 176.519Z"
              fill="#AF6359"
            />
            <path
              d="M461.705 300.332C467.519 290.032 467.07 278.774 460.703 275.186C454.335 271.598 444.46 277.04 438.646 287.34C432.832 297.64 433.281 308.899 439.649 312.486C446.017 316.074 455.892 310.632 461.705 300.332Z"
              fill="#AF6359"
            />
            <path
              d="M506.066 252.563C506.066 252.563 485.896 266.785 492.83 288.012L487.157 359.62L499.763 506.98H526.916L531.278 401.183L548.927 334.43L551.215 506.98L584.854 506.35C584.854 506.35 586.745 420.075 584.224 415.037C581.703 409.999 584.224 414.041 584.224 414.041L605.024 313.004L601.873 243.747L506.066 252.563Z"
              fill="#2F2E41"
            />
            <path
              d="M555.86 76.8647L519.302 90.719L523.084 100.795L492.829 123.466L512.999 193.997L501.654 256.971L534.43 255.712L605.024 249.415L597.461 172.586L598.721 98.276L570.988 88.2001L555.86 76.8647Z"
              fill="#F18701"
            />
            <path
              d="M502.284 121.576L492.83 123.466C492.83 123.466 488.417 126.614 488.417 137.95C488.417 149.285 488.417 156.842 489.678 163.14C489.678 163.14 482.114 183.291 484.635 188.329C487.157 193.367 518.672 193.367 518.672 193.367L502.284 121.576V121.576Z"
              fill="#F18701"
            />
            <path
              d="M554.381 47.6386C554.381 63.4949 541.516 76.3489 525.645 76.3489C509.775 76.3489 496.909 63.4949 496.909 47.6386C496.909 31.7823 509.775 18.9282 525.645 18.9282C541.516 18.9282 554.381 31.7823 554.381 47.6386Z"
              fill="#AF6359"
            />
            <path
              d="M543.603 67.6304C543.603 67.6304 548.694 48.09 543.269 51.5356L534.851 50.7363L540.166 36.5302C540.166 36.5302 530.651 29.403 526.856 33.5692C523.062 37.7354 523.972 40.0849 520.523 34.6653C517.074 29.2457 509.868 29.3481 503.268 33.2479C496.668 37.1476 491.51 37.7895 492.764 30.5532C494.019 23.317 493.316 11.021 497.234 12.4154C501.153 13.8099 500.078 14.597 502.191 9.54377C504.304 4.49055 504.571 1.68688 509.462 3.84865C514.353 6.01041 526.644 -4.13858 531.723 2.00161C536.802 8.1418 541.239 9.12881 545.676 10.1158C550.112 11.1028 567.937 8.26879 566.446 35.8513C566.446 35.8513 578.344 59.6128 556.913 70.5914C556.913 70.5914 551.097 64.8569 547.036 71.8267L543.603 67.6304H543.603Z"
              fill="#2F2E41"
            />
            <path
              d="M267.728 129.309L239.745 130.183L224.878 148.53L208.263 152.025C208.263 152.025 203.016 200.953 210.887 218.427C218.757 235.901 215.259 241.144 215.259 241.144L278.222 240.27C278.222 240.27 276.473 228.403 286.967 218.173L292.23 198.715C295.043 188.311 294.085 177.249 289.524 167.484L278.222 143.288L268.603 139.793L267.728 129.309V129.309Z"
              fill="#2F2E41"
            />
            <path
              d="M215.259 251.628L211.324 258.181C211.324 258.181 199.081 274.781 197.332 321.962C195.583 369.142 210.012 521.811 210.012 521.811H229.981L251.568 315.258L280.409 522.041L306.206 522.478L304.02 311.477C304.02 311.477 298.773 263.423 284.781 252.939C284.781 252.939 239.745 293.566 215.259 251.628Z"
              fill="#2F2E41"
            />
            <path
              d="M178.84 148.122C178.84 157.193 178.293 163.942 168.379 164.546C159.067 165.113 157.918 157.193 157.918 148.122C157.918 139.052 158.135 131.772 168.379 131.699C180.042 131.615 178.84 139.052 178.84 148.122Z"
              fill="#F18701"
            />
            <path
              d="M237.121 148.122C237.121 157.193 239.507 163.942 226.66 164.546C216.777 165.011 216.2 157.193 216.2 148.122C216.2 139.052 217.651 132.717 226.66 131.699C235.135 130.741 237.121 139.052 237.121 148.122Z"
              fill="#F18701"
            />
            <path
              d="M228.155 140.657H169.873V154.095H228.155V140.657Z"
              fill="#F18701"
            />
            <path
              d="M279.406 145.501C279.406 154.572 278.859 161.321 268.945 161.925C259.634 162.492 258.484 154.572 258.484 145.501C258.484 136.431 258.701 129.151 268.945 129.078C280.608 128.994 279.406 136.431 279.406 145.501Z"
              fill="#F18701"
            />
            <path
              d="M337.688 145.501C337.688 154.572 340.073 161.321 327.227 161.925C317.344 162.39 316.766 154.572 316.766 145.501C316.766 136.431 318.218 130.095 327.227 129.078C335.701 128.12 337.688 136.431 337.688 145.501Z"
              fill="#F18701"
            />
            <path
              d="M328.721 138.036H270.44V151.474H328.721V138.036Z"
              fill="#F18701"
            />
            <path
              d="M431.567 288.79C431.567 297.86 431.02 304.609 421.106 305.213C411.795 305.781 410.646 297.86 410.646 288.79C410.646 279.719 410.862 272.439 421.106 272.366C432.769 272.282 431.567 279.719 431.567 288.79Z"
              fill="#F18701"
            />
            <path
              d="M489.849 288.79C489.849 297.86 492.235 304.609 479.388 305.213C469.505 305.678 468.927 297.86 468.927 288.79C468.927 279.719 470.379 273.384 479.388 272.366C487.862 271.408 489.849 279.719 489.849 288.79Z"
              fill="#F18701"
            />
            <path
              d="M480.883 281.324H422.601V294.762H480.883V281.324Z"
              fill="#F18701"
            />
            <path
              d="M300.028 166.139C306.303 166.139 311.39 157.91 311.39 147.76C311.39 137.61 306.303 129.381 300.028 129.381C293.753 129.381 288.666 137.61 288.666 147.76C288.666 157.91 293.753 166.139 300.028 166.139Z"
              fill="#AF6359"
            />
            <path
              d="M246.303 118.824C263.449 118.824 277.348 104.938 277.348 87.8077C277.348 70.6777 263.449 56.7911 246.303 56.7911C229.158 56.7911 215.259 70.6777 215.259 87.8077C215.259 104.938 229.158 118.824 246.303 118.824Z"
              fill="#AF6359"
            />
            <path
              d="M240.071 97.5538L247.253 86.1333L250.488 70.6017C250.488 70.6017 283.209 78.5753 274.43 62.628C265.651 46.6808 243.305 42.694 228.142 54.6544L221.606 61.0333C221.606 61.0333 236.123 47.4781 227.344 42.6939C218.565 37.9098 220.161 34.7203 215.373 38.7071C210.584 42.6939 212.978 45.8834 207.392 43.4913C201.805 41.0992 189.834 37.9098 191.43 41.8966C193.026 45.8834 180.986 56.2491 185.41 61.0333C189.834 65.8175 185.844 75.3859 193.825 72.9938C201.805 70.6017 197.815 82.5621 204.998 77.7779C204.998 77.7779 199.102 85.2842 203.891 90.8657C208.679 96.4473 216.057 98.6188 215.259 106.592C214.461 114.566 233.623 116.203 233.623 116.203L232.132 92.9279C232.132 92.9279 236.878 89.0402 240.071 97.5538Z"
              fill="#2F2E41"
            />
            <path
              d="M556.134 151.074C556.134 151.074 551.557 166.558 553.038 177.142L501.299 245.633L515.978 259.653L579.446 198.633L591.493 165.902L556.134 151.074V151.074Z"
              fill="#AF6359"
            />
            <path
              d="M512.039 270.095C519.169 260.656 520.218 249.438 514.383 245.038C508.549 240.638 498.038 244.723 490.908 254.162C483.778 263.6 482.728 274.819 488.563 279.218C494.398 283.618 504.909 279.534 512.039 270.095Z"
              fill="#AF6359"
            />
            <path
              d="M593.629 94.1382C593.629 94.1382 609.747 99.9805 607.696 111.058C605.646 122.135 604.867 129.438 604.867 129.438C604.867 129.438 606.614 135.489 604.336 138.505C602.058 141.521 590.361 176.883 590.361 176.883L548.292 162.518C548.292 162.518 572.954 94.3276 593.629 94.1382Z"
              fill="#F18701"
            />
            <path
              d="M704 568.266C704 568.671 703.671 569 703.265 569H0.734598C0.328896 569 0 568.671 0 568.266C0 567.861 0.328887 567.532 0.734598 567.532H703.265C703.671 567.532 704 567.861 704 568.266Z"
              fill="#E6E6E6"
            />
            <path
              d="M211.279 148.592C211.279 158.743 206.192 166.971 199.918 166.971C193.643 166.971 188.556 158.743 188.556 148.592C188.556 138.442 193.643 130.214 199.918 130.214C206.192 130.214 211.279 138.442 211.279 148.592Z"
              fill="#AF6359"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_4">
              <rect width="704" height="569" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
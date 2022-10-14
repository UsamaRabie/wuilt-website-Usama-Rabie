
/* declaring slide array content */
let slidesArray = [
    ` <div id="slideContent">
        <div style="text-align: center">
          <img
            class="imgSlide"
            src="https://assets-global.website-files.com/614319338322d2f96eb4dd96/62123cdf3ab1f94b8b582dc5_Tetyana%20testimonial%20wuilt.jpg"
            alt=""
          />
        </div>
        <div>
          <p class="slideText">
            "كل ما احتجته هو فتح منصة ويلت وإدخال بعض بياناتي فرأيت الموقع جاهز
            أمامي بخطوات بسيطة. استخدام المنصة كان أسهل مما ظننت مما يسمح لأي
            شخص تصميم الويبسايت الخاص به بنفسه. فريق الدعم من جهة أخرى أفضل من
            ممتاز في سرعة الرد على أي سؤال وحل كل الصعوبات التي واجهتني."
          </p>
        </div>
      </div>`,
`
       <div id="slideContent">
        <div style="text-align: center">
          <img
            class="imgSlide"
            src="https://assets-global.website-files.com/614319338322d2f96eb4dd96/62123fc96fc36f0082cb90cf_Mina%20Plutogate%20testimonial%20wuilt.jpg"
            alt=""
          />
        </div>
        <div>
          <p class="slideText">
          "استخدمت منصة ويلت بحساب مجاني للتجربة. وانبهرت بسهولة التجربة حيث تم إنشاء الموقع في وقت سريع جدًا. وطريقة استخدام المحرر كانت سهلة، رفعت الصور، وقمت بإضافة التحديثات ولينكات السوشيال ميديا بدون أي مجهود. حتى أن موقعي تصدر نتائج بحث جوجل."

            </p>
        </div>
      </div>
`,
`
 <div id="slideContent">
        <div style="text-align: center">
          <img
            class="imgSlide"
            src="https://assets-global.website-files.com/614319338322d2f96eb4dd96/61e6d0b127215b1d58fe06c6_Lina%20Attia%20testimonial%20wuilt.png"
            alt=""
          />
        </div>
        <div>
          <p class="slideText">"كنت احتاج لعمل ويب سايت لأحصل على منصة أقدم عليها خدماتي وأسهل على عملائي الوصول لها. ساعدتني منصة ويلت بتصاميمهم الجاهزة فاخترت الألوان والأشكال التي تناسبني. وفريق الدعم ساعدني كثيرًا حتى أصبحت راضية تمامًا عن موقعي."
            </p>
        </div>
      </div>`
];

/* declaring elements we will use in slide show  */

let slide = document.getElementById("slide"); // slide content
let prev = document.getElementById("prev");  // prev button
let next = document.getElementById("next"); // next button
let i = 0 ;  // counter or index array
prev.addEventListener("click" , (eo) => {    // when click prev button
  
    i = i%slidesArray.length;
     i--;   // counter -1
    if(i<0)
    i = slidesArray.length-1 ;   /* if we in the first slide then go to the last slide when click in prev */

    slide.innerHTML=`${slidesArray[i]}`;
     slideContent.style.animation= "mymove2 2s 1";  /* animation of slide when press prev button */
  
}
)



next.addEventListener("click" , (eo) => { /* event when click next button */
     i++;  // counter +1
    i = i%slidesArray.length;   /*  to avoid runtime error to avoid index be bigger than length of array */
    slide.innerHTML=`${slidesArray[i]}`;

    slideContent.style.animation = "mymove1 2s 1"; /* animation when press next button */
  
}
)
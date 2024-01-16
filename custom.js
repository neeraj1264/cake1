let menubar=document.querySelector("#menu-bars"),mynav=document.querySelector(".navbar");menubar.onclick=()=>{menubar.classList.toggle("fa-times"),mynav.classList.toggle("active")};const navbarItems=document.querySelectorAll(".navbar a:not(#menu-bars)");navbarItems.forEach(t=>{t.addEventListener("click",()=>{mynav.classList.contains("active")&&(menubar.classList.toggle("fa-times"),mynav.classList.toggle("active"))})});var cartData={};let cartCount=0,cartCountElement=document.getElementById("cart-count");function handleAddToCartClick(t){let e=t.target.closest(".add-to-cart");if(e){let a=e.parentNode.querySelector(".Go-to-Cart");e.style.display="none",a.style.display="flex",cartCount++,cartCountElement.textContent=cartCount}}function calculateitemTotal(){let t=0;for(let e in cartData)cartData.hasOwnProperty(e)&&(t+=cartData[e].quantity*cartData[e].price);return`₹ ${t.toFixed(2)}`}function calculateTotal(){let t=20;for(let e in cartData)cartData.hasOwnProperty(e)&&(t+=cartData[e].quantity*cartData[e].price);return`₹ ${t.toFixed(2)}`}function submitOrder(t){let e=localStorage.getItem("currentOrderNumber");e=e?parseInt(e)+1:1;let a=String(e).padStart(4,"0");localStorage.setItem("currentOrderNumber",e);var n=`Order  : *ORD-${a}*
`;for(let l in n+=`Amount :- *${calculateTotal()}*

`,n+="----------items----------\n\n",t)if(t.hasOwnProperty(l)){let d=t[l];n+=`${d.quantity}.0 x   ${d.name} ${d.code} = ₹ ${d.price}
`}var o="https://api.whatsapp.com/send?phone=+917015823645&text="+encodeURIComponent(n+=`Service Charge = ₹ 20.00
`);window.open(o,"_blank"),location.reload()}document.querySelector(".bdaycake").addEventListener("click",t=>{handleAddToCartClick(t)}),document.querySelector(".anicake").addEventListener("click",t=>{handleAddToCartClick(t)}),document.querySelector(".heart").addEventListener("click",t=>{handleAddToCartClick(t)}),document.querySelector(".fruit").addEventListener("click",t=>{handleAddToCartClick(t)}),document.querySelector(".doll").addEventListener("click",t=>{handleAddToCartClick(t)}),document.querySelector(".multi").addEventListener("click",t=>{handleAddToCartClick(t)}),document.querySelector(".pic").addEventListener("click",t=>{handleAddToCartClick(t)});let isCartModalOpen=!1;function showCartModal(){if(0===Object.keys(cartData).length){closeCartModal();return}if(document.getElementById("cartModal").style.display="block",isCartModalOpen=!0,document.getElementById("dark-mode-toggle").style.display="none",cartCount<1){alert("Please add items to the cart first."),closeCartModal();return}let t=document.getElementById("cartModal");t.style.display="block";let e=document.getElementById("cartItems");e.innerHTML="",e.style.maxHeight="500px",e.style.overflowX="auto";let a=document.createElement("table");a.classList.add("cart-table");let n=document.createElement("tr"),l=["Image","Name","Quantity","Price"];for(let d of l){let o=document.createElement("th");o.textContent=d,("Name"===d||"Quantity"===d||"Image"===d||"Price"===d)&&o.classList.add("header-spaced"),n.appendChild(o)}for(let i in a.appendChild(n),cartData)if(cartData.hasOwnProperty(i)){let r=cartData[i],c=document.createElement("tr"),s=document.createElement("td");s.classList.add("center-align");let p=document.createElement("img");p.src=r.image,p.alt=r.name,s.appendChild(p),c.appendChild(s);let m=document.createElement("td");m.classList.add("center-align"),m.innerHTML=`${r.name}`,c.appendChild(m);let u=document.createElement("td");u.classList.add("center-align");let h=document.createElement("i");h.classList.add("fas","fa-minus","quantity-icon"),h.setAttribute("data-item-id",i),h.addEventListener("click",()=>{r.quantity>1?(r.quantity--,y.textContent=r.quantity,updatePrice(r,f),w.textContent=`${calculateitemTotal()}`,z.textContent=`${calculateTotal()}`):(delete cartData[i],showCartModal(),updateCartCount(),w.textContent=`${calculateitemTotal()}`,z.textContent=`${calculateTotal()}`)}),u.appendChild(h);let y=document.createElement("span");y.classList.add("item-quantity"),y.textContent=r.quantity,u.appendChild(y);let C=document.createElement("i");C.classList.add("fas","fa-plus","quantity-icon"),C.setAttribute("data-item-id",i),C.addEventListener("click",()=>{r.quantity++,y.textContent=r.quantity,updatePrice(r,f),w.textContent=`${calculateitemTotal()}`,z.textContent=`${calculateTotal()}`}),u.appendChild(C),c.appendChild(u);let f=document.createElement("td");f.classList.add("center-align"),f.textContent=`₹ ${r.price*r.quantity}`,c.appendChild(f),a.appendChild(c)}let g=document.createElement("tr"),v=document.createElement("td");v.classList.add("footer-hr-cell"),g.appendChild(v);let b=document.createElement("td");b.classList.add("footer-hr-cell"),g.appendChild(b);let E=document.createElement("td");E.classList.add("footer-hr-cell"),g.appendChild(E);let L=document.createElement("td");L.classList.add("footer-hr-cell"),g.appendChild(L),a.appendChild(g);let k=document.createElement("tr"),x=document.createElement("td");x.setAttribute("colspan",l.length),k.appendChild(x),a.appendChild(k);let T=document.createElement("tr"),q=document.createElement("td");q.textContent="Item-Total",q.classList.add("cart-footer"),T.appendChild(q);let I=document.createElement("td");I.setAttribute("colspan","2"),T.appendChild(I);let w=document.createElement("td");w.textContent=`${calculateitemTotal()}`,w.classList.add("cart-footer"),T.appendChild(w),a.appendChild(T);let M=document.createElement("tr"),$=document.createElement("td");$.textContent="Delivery",$.classList.add("cart-footer"),M.appendChild($);let D=document.createElement("td");D.setAttribute("colspan","2"),M.appendChild(D);let P=document.createElement("td");P.textContent="₹ 20",P.classList.add("cart-footer"),M.appendChild(P),a.appendChild(M);let _=document.createElement("tr"),S=document.createElement("td");S.textContent="Total",S.classList.add("cart-footer"),_.appendChild(S);let A=document.createElement("td");A.setAttribute("colspan","2"),_.appendChild(A);let z=document.createElement("td");z.textContent=`${calculateTotal()}`,z.classList.add("cart-footer"),_.appendChild(z),a.appendChild(_);let O=document.createElement("tr"),B=document.createElement("td");B.setAttribute("colspan","3"),O.appendChild(B);let H=document.createElement("td");H.setAttribute("colspan","1"),H.classList.add("submit-cell"),O.appendChild(H);let G=document.createElement("button");G.textContent="Place Order",G.classList.add("submit-button"),G.addEventListener("click",()=>{submitOrder(cartData)}),H.appendChild(G),a.appendChild(O);let N=document.createElement("tr"),W=document.createElement("td");W.setAttribute("colspan",l.length),N.appendChild(W),a.appendChild(N),e.appendChild(a)}function updatePrice(t,e){e.textContent=`₹ ${t.price*t.quantity}`}function closeCartModal(){document.getElementById("cartModal").style.display="none",isCartModalOpen=!1,document.getElementById("dark-mode-toggle").style.display="block";let t=document.getElementById("cartModal");t.style.display="none",location.reload()}function addToCart(t,e,a,n,l,d){cartData.hasOwnProperty(t)?cartData[t].quantity++:cartData[t]={name:e,price:a,image:n,code:l,quantity:1},updateCartCount()}function showDropdown(t){let e=document.getElementById(`dropdown-${t}`);e.style.display="block"}function hideDropdown(t){let e=document.getElementById(`dropdown-${t}`);e.style.display="none"}function addToCartWithSize(t,e,a,n){let l=document.getElementById(`dropdown-options-${t}`),d=l.options[l.selectedIndex].text,o=d.split("-")[0].trim(),i=parseInt(d.split("₹")[1]);addToCart(t,`${e} [${o}]`,i,a,n)}function updateCartCount(){let t=document.getElementById("cart-count"),e=0;for(let a in cartData)cartData.hasOwnProperty(a)&&(e+=cartData[a].quantity);t.textContent=e}let http=new XMLHttpRequest;function toggleDarkMode(){let t=document.body;t.classList.toggle("dark-mode");let e=document.getElementById("mode-icon");t.classList.contains("dark-mode")?(e.classList.remove("fa-moon"),e.classList.add("fa-sun"),localStorage.setItem("darkMode","enabled")):(e.classList.remove("fa-sun"),e.classList.add("fa-moon"),localStorage.setItem("darkMode","disabled"))}function zoomImage(t){let e=document.getElementById("zoomed-image"),a=document.getElementById("image-zoom-container");e.src=t.src,a.style.display="block"}function closeZoomImage(){let t=document.getElementById("image-zoom-container");t.style.display="none"}http.open("get","products.json",!0),http.send(),http.onload=function(){if(4==this.readyState&&200==this.status){let t=JSON.parse(this.responseText);function e(t){return`
  <div class="box">
    <span class="dis product-price"><b>${Math.round((t.mrp-t.price.two)/t.mrp*100)}</b>% off</span>
    <img src="${t.image}" alt="img" onclick="zoomImage(this)">
    <h3 class="product-name"><b>${t.name}</b></h3>
    <div class="stars"></div>
    <div class="dropdownn" id="dropdown-${t.id}" style="display: flex;">
      <select class="size" id="dropdown-options-${t.id}">
        <option value="2 Pound">2 Pound - ₹${t.price.two}</option>
        <option value="3 Pound">3 Pound - ₹${t.price.three}</option>
        <option value="4 Pound">4 Pound - ₹${t.price.four}</option>
      </select><br><br>
    </div>
    <button class="btn btn-ok add-to-cart" onclick="addToCartWithSize('${t.id}', '${t.name}', '${t.image}', '${t.code}')">Add</button>
    <div class="Go-to-Cart" style="display: none;">
      <h2 class="go" onclick="showCartModal()">GO <i class="fas fa fa-shopping-cart"></i></h2>
    </div>
  </div>
  </div>
  </div>
  `}function a(t){return`
  <div class="box" >
  <span class="dis product-price"><b>${Math.round((t.mrp-t.price.three)/t.mrp*100)}</b>% off</span>
  <img src="${t.image}" alt="img" onclick="zoomImage(this)">
  <h3 class="product-name"<b>${t.name}</b>  </h3>
  
  <div class="stars"></div>
  <div class="dropdownn" id="dropdown-${t.id}" style="display: flex;">
  <select class="size" id="dropdown-options-${t.id}">
  <option value="3 Pound ">3 Pound - ₹${t.price.three}</option>
  <option value="4 Pound ">4 Pound - ₹${t.price.four}</option>
  <option value="5 Pound ">5 Pound - ₹${t.price.five}</option>
  </select><br><br>
</div>
<button class="btn btn-ok add-to-cart" onclick="addToCartWithSize('${t.id}', '${t.name}', '${t.image}', '${t.code}')">Add</button>
  <div class="Go-to-Cart" style="display: none;">
  <h2 class="go" onclick="showCartModal()">GO <i class="fas fa fa-shopping-cart"></i></h2>
  </div>
  
  </div>
  </div>
  </div>
  `}function n(t){return`
  <div class="box" >
  <span class="dis product-price"><b>${Math.round((t.mrp-t.price.five)/t.mrp*100)}</b>% off</span>
  <img src="${t.image}" alt="img" onclick="zoomImage(this)">
  <h3 class="product-name"<b>${t.name}</b>  </h3>
  <div class="stars"></div>
   <div class="dropdownn" id="dropdown-${t.id}" style="display: flex;">
   <select class="size" id="dropdown-options-${t.id}">
   <option value="5 Pound ">${t.size.one}  - ₹${t.price.five}</option>
   <option value="6 Pound ">${t.size.two}  - ₹${t.price.six}</option>
   </select><br><br>
 </div>
 <button class="btn btn-ok add-to-cart" onclick="addToCartWithSize('${t.id}', '${t.name}', '${t.image}', '${t.code}')">Add</button>
 <div class="Go-to-Cart" style="display: none;">
  <h2 class="go" onclick="showCartModal()">GO <i class="fas fa fa-shopping-cart"></i></h2>
  </div>
  
  </div>
  </div>
  </div>
  `}let l="",d="",o="",i="",r="",c="",s="";for(let p=0;p<t.length;p++){let m=t[p];p<10&&(l+=e(m),l+=`
<div class="image-zoom-container" id="image-zoom-container">
  <span class="close-zoom" onclick="closeZoomImage()">&times;</span>
  <img class="zoomed-image" id="zoomed-image">
</div>
`),p>=21&&p<26&&(i+=e(m)),p>=10&&p<14&&(d+=a(m)),(14==p||15==p||p>=17&&p<21)&&(o+=a(m)),p>=26&&p<31&&(r+=n(m)),(16==p||p>=31&&p<42)&&(c+=n(m)),p>=42&&p<51&&(s+=n(m))}document.querySelector(".bdaycake").innerHTML=l,document.querySelector(".anicake").innerHTML=d,document.querySelector(".heart").innerHTML=o,document.querySelector(".fruit").innerHTML=i,document.querySelector(".doll").innerHTML=r,document.querySelector(".multi").innerHTML=c,document.querySelector(".pic").innerHTML=s}},document.addEventListener("DOMContentLoaded",function(){let t=document.body,e=document.getElementById("mode-icon"),a=localStorage.getItem("darkMode");"enabled"===a?(t.classList.add("dark-mode"),e.classList.remove("fa-moon"),e.classList.add("fa-sun")):(t.classList.remove("dark-mode"),e.classList.remove("fa-sun"),e.classList.add("fa-moon"))});
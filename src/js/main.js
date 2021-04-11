// //////////////////////////////////////////////////
// ==================================================
// ––––––––––––––––––––––––––––––––––––––––––––––––––
// M A I N   J S
// ––––––––––––––––––––––––––––––––––––––––––––––––––
// ==================================================
// //////////////////////////////////////////////////

import 'bootstrap';
const Handlebars = require("handlebars");

document.addEventListener('DOMContentLoaded', function() {

   // ––––––––––––––––––––––––––––––––––––––––––––––––––
   // N A V B A R
   // ––––––––––––––––––––––––––––––––––––––––––––––––––
   
   // Scroll menu change color
   var nav = document.getElementById('navbar');
   var scrollpos = window.scrollY;

   function add_class_on_scroll() {
      nav.classList.add("scrolled");
   }

   function remove_class_on_scroll() {
      nav.classList.remove("scrolled");
   }

   window.addEventListener('scroll', function(){ 
      scrollpos = window.scrollY;

      if(scrollpos > nav.offsetHeight){
         add_class_on_scroll();
      }
      else {
         remove_class_on_scroll();
      }
   });

   // Navicon
   var navicon = document.querySelector('#navicon');
   var modalMenu = document.querySelector('#modal-menu');

   navicon.addEventListener('click',function(){
      modalMenu.classList.toggle('open');
      this.querySelector('#navicon_icon').classList.toggle('active');
   });
    
   modalMenu.addEventListener('click', function(e){
      e.preventDefault;
      this.classList.remove('open');
      navicon.querySelector('#navicon_icon').classList.toggle('active');
   });

   // ––––––––––––––––––––––––––––––––––––––––––––––––––
   // S E R V I C E S   H O M E
   // ––––––––––––––––––––––––––––––––––––––––––––––––––

   var servicesHome = document.querySelector('.services');
   var sourceServices = document.getElementById("template-services-home").innerHTML;
   var template = Handlebars.compile(sourceServices);

   var servicesHomeData = {
      service: [
         {
           title:"Progettazione grafica",
           text:"Progetto soluzioni creative per trasformare in forma unica e visiva la tua comunicazione, lavorando con colori, immagini e caratteri tipografici ricercati per le tue esigenze.",
           list: [
              "Logo design e immagine coordinata",
              "Grafica pubblicitaria",
              "Grafica digitale e per la stampa",
              "Web design & UI"
           ],
           button:"Scopri i servizi",
           color:"primary",
           slug:"service_gd",
         },
         {
            title:"Sviluppo web",
            text:"Dal design al codice, realizzo progetti completi per portare online uno strumento funzionale ai tuoi obiettivi, in grado di generare sempre risultati misurabili.",
            list: [
               "Realizzazione siti web",
               "Sviluppo temi WordPress",
               "SEO & Web marketing",
               "Gestione social media"
            ],
            button:"Scopri i servizi",
            color:"green",
            slug:"service_wd",
         }
       ]
   };
   
   var servicesHtml = template(servicesHomeData);
   servicesHome.innerHTML = servicesHtml;
   
   // ––––––––––––––––––––––––––––––––––––––––––––––––––
   // B L O G   H O M E
   // ––––––––––––––––––––––––––––––––––––––––––––––––––

   var blogHome = document.querySelector('.owl-carousel.blog');
   var sourceBlog = document.getElementById("template-blog-home").innerHTML;
   var template = Handlebars.compile(sourceBlog);

   var blogHomeData = {
      post: [
         {
           title:"I throw myself down among the tall grass by the trickling stream",
           img:"",
           date:"11 aprile 2021",
           category: [
              "Grafica"
           ]
         },
         {
           title:"I should be incapable of drawing a single stroke at the present moment",
           img:"",
           date:"12 aprile 2021",
           category: [
              "Web"
           ]
         },
         {
           title:"Then I feel the presence of the Almighty, who formed us in his own image, and the breath",
           img:"",
           date:"13 aprile 2021",
           category: [
              "Social"
           ]
         },
       ]
   };
   
   var blogHtml = template(blogHomeData);
   blogHome.innerHTML = blogHtml;
   
   // ––––––––––––––––––––––––––––––––––––––––––––––––––
   // CLIENTS   H O M E
   // ––––––––––––––––––––––––––––––––––––––––––––––––––

   var clientsHome = document.querySelector('.owl-carousel.clients');
   var sourceclients = document.getElementById("template-clients-home").innerHTML;
   var template = Handlebars.compile(sourceclients);

   var clientsHomeData = {
      client: [
         {
           logo:"src/img/logo.svg",
           link:"",
         },
         {
           logo:"src/img/logo.svg",
           link:"",
         },
         {
           logo:"src/img/logo.svg",
           link:"",
         },
         {
           logo:"src/img/logo.svg",
           link:"",
         },
         {
           logo:"src/img/logo.svg",
           link:"",
         },
         {
           logo:"src/img/logo.svg",
           link:"",
         },
       ]
   };
   
   var clientsHtml = template(clientsHomeData);
   clientsHome.innerHTML = clientsHtml;


}); // document ready
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
   {
    id: 10,
    title: "steak",
    category: "dinner",
    price: 5.99,
    img: "./images/item-5.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
];


//when page loads access menu

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');
//because adding dynamically have no access to them
//const filterBtns = document.querySelectorAll('.filter-btn');

//load all items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuButtons();


});

//put into function and itreate through the the array passed into the function
function displayMenuItems(menuItems){
     //map method
    let displayMenu = menuItems.map(function (item){
        //have to write return item otherwise it will be undefined
        return `<article class="menu-item">
         <img src=${item.img} class="photo" alt=${item.title}/>
        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
        </article>`;
    });
    //join to get rid of commas 
    //creat giant string
    displayMenu = displayMenu.join("");
//    put it into section center
    sectionCenter.innerHTML = displayMenu;

};


function displayMenuButtons() {
        //return categories
//    acc curr
    const categories  = menu.reduce(
        function(values, item) {
        //have to return values
        if(!values.includes(item.category)){
           //if values does not includ item category
           values.push(item.category);
           }
       return values;
    }, 

        ['all']
    ); 
    //initial value for acc
    const categoryBtns = categories.map(function(category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;                               
  })
   .join("");
    console.log(categoryBtns);
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');
    //filter items loop through
    
    filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        //dataset
        const category = e.currentTarget.dataset.id;
        
        const menuCategory = menu.filter(function(menuItem){
       
//            if category matches the variable (id)
           if(menuItem.category === category) {
               return menuItem; 
               }
        });
  
//     console.log(menuCategory);
        if(category === 'all') {
            //display whole thing
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }

    });
});
}
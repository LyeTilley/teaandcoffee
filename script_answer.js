const drinks = {
    coffee: [
      {
        title: 'Two If By Sea',
        price: '$$',
      },
      {
        title: 'Weird Harbour Espresso Bar',
        price: '$$',
      },
      {
        title: 'Uncommon Grounds',
        price: '$$',
      },
      {
        title: 'The Nook',
        price: '$$',
      },
      {
        title: 'Dilly Dally Coffee Cafe',
        price: '$',
      },
      {
        title: 'Lucky Penny',
        price: '$',
      },
      {
        title: 'The Wired Monk',
        price: '$',
      },
      {
        title: 'Java Blend Coffee Roasters',
        price: '$',
      }
    ],
    tea: [
      {
        title: 'Local Jo Cafe',
        price: '$$',
      },
      {
        title: 'Cabin Coffee',
        price: '$$',
      },
      {
        title: "David's Tea",
        price: '$$',
      },
      {
        title: 'Starbucks',
        price: '$$',
      },
      {
        title: 'Board Room Cafe',
        price: '$',
      },
      {
        title: 'Ardmore',
        price: '$',
      },
      {
        title: 'Tims',
        price: '$',
      },
      {
        title: 'Second Cup',
        price: '$',
      }
    ]
  };
  

  
function randomItem(optionsArray) {
    const index = Math.floor(Math.random() * optionsArray.length);
    return optionsArray[index];
  }
  
  const formEl = document.querySelector('form');
  
  formEl.addEventListener('submit', function(event){
    event.preventDefault();
    const type = document.querySelector('input[name=beverage]:checked').value;
    const price = document.querySelector('input[name=price]:checked').value;
  
    const choice = drinks[type];
    const options = [];
  
    for (let i = 0; i < choice.length; i++) {
      const store = choice[i];
  
      if (store.price === price) {
        options.push(store)
      }
    }
  
    const optionToDisplay = randomItem(options);


  
    const results = document.querySelector('.results');
    results.innerHTML = `<h2 class="choice">${optionToDisplay.title}</h2>`;
  })
  
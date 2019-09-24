const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular

    console.log('hello');

    // Interpolated

    console.log('Hello, I am an %s string', 'inserted');

    // Styled

    console.log('%cHello, I am just some funky yellow text', 'color:#bada55; text-shadow: 1px 1px 0 grey');

    // warning!

    console.warn('Achtung!');

    // Error :|

    console.error('Oops! Error!');


    // Info

    console.info('Random fact: There was a successful Tinder match in Antarctica in 2014');

    // Testing

    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing

    // console.clear();

    // Viewing DOM Elements

    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${7 * dog.age} years old.`);
    console.groupEnd(`${dog.name}`);
    })

    // counting

    console.count('Julia');
    console.count('Julia');
    console.count('Julia');
    console.count('Julia');

    // timing

    console.time('fetching data');
    fetch('https://api.github.com/users/JuliaShumeyko')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        })
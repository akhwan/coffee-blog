//nav menu slide
const navSlide = () => {
  const menu = document.querySelector('#ellipsis');
  const nav = document.querySelector('nav');

  menu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};

navSlide();

//change article

/* const changeArticle = () => {
  const mainImage = document.querySelector('#main-image img');
  const article = document.querySelector('main p');
  const images = document.querySelectorAll('.img-src');

  images.forEach(image => {
    image.addEventListener('click', function() {
      if (images[0]) {
        mainImage.src = 'image/coffee-1.jpg';
        article.innerHTML = 'article 1';
      } else if (images[1]) {
        mainImage.src = 'image/coffee-2.jpg';
        article.innerHTML = 'article 2';
      } else {
        mainImage.src = 'image/coffee-3.jpg';
        article.innerHTML = 'article 3';
      }
    });
  });
};

changeArticle(); */

const changeArticle = () => {
  const mainImage = document.querySelector('#main-image img');
  const article = document.querySelector('main p');
  const images = document.querySelectorAll('.img-src');
  const date = document.querySelector('#date');
  const title = document.querySelector('main h1');

  images[0].onclick = function() {
    title.innerHTML = 'Black Coffee';
    mainImage.src = 'image/coffee-1.jpg';
    article.innerHTML = `When people think of coffee, they usually think of its ability to provide an energy boost. However, according to some research, it can also offer some other important health benefits, such as a lower risk of liver cancer, type 2 diabetes, and heart failure.<br>

    Researchers have looked at the benefits of drinking coffee for conditions such as diabetes, cardiovascular disease, inflammatory bowel disease, and liver disease. There is evidence to support some, but not all, of these claims.<br>

    Coffee contains a number of useful nutrients, including riboflavin (vitamin B-2), niacin (vitamin B-3), magnesium,potassium, and various phenolic compounds, or antioxidants. Some experts suggest that these and other ingredients in coffee can benefit the human body in various ways.<br>

    This article looks at the health benefits of drinking coffee, the evidence supporting those benefits, and the risks of drinking coffee.<br>

    By medicalnewstoday.com`;
    date.innerHTML = 'by Sergey Bin on jun 2 19"';
  };

  images[1].onclick = function() {
    title.innerHTML = 'Coffee Latte';
    mainImage.src = 'image/coffee-2.jpg';
    article.innerHTML = `Fifty-four percent of American adults are coffee drinkers with the average intake being at least three cups of coffee per day. As you can guess, this adds up: the U.S. spends roughly $40 billion on coffee each year. But the U.S. doesn’t even break the top 20 in a ranking of countries by coffee consumption per capita, coming in only at number 22. Coffee consumption proves highest in the land of the midnight sun: Finland and Norway rank #1 among the top coffee drinking countries in the world, although the Netherlands and Slovenia are not far behind.

    There are over 21,000 Starbucks locations alone in the world (with about 12,000 of those being in the U.S.) and our consumption continues to rise. Global demand is expected to increase by an extra 40-50 million bags of coffee over the next decade which is more than Brazil’s entire yearly production. With the current threats to coffee crops that come with climate change, the world could possibly face a severe coffee shortage."
    
    So what has us all so hooked? Let’s discuss the science behind the making of a good cup of coffee as well as its potential health benefits.
    
    by scientificamerican.com`;

    date.innerHTML = 'by Demi So on may 4 19"';
  };

  images[2].onclick = function() {
    title.innerHTML = 'Coffee Bean';
    mainImage.src = 'image/coffee-3.jpg';
    article.innerHTML = `Coffee beans themselves have little to no taste at all. The flavor, the aroma of coffee: it all comes from the roasting process which releases a large number of chemicals from the tiny bean. In fact, the average cup of coffee contains more than 1,000 chemicals. To transfer those delicious chemicals to the hot water in our cup, we run water over those roasted beans. To increase our success, we both grind the beans to increase their surface area (and thus more exposure of those chemicals to the water) and heat the water since higher temperatures (and thus energies) speed up the removal of molecules from a solid.

    Lucky for us coffee drinkers, smaller and more water soluble molecules like acids will get extracted first and those tend to be the tastier, less bitter flavors. Coffee drinkers are well aware that not every cup is created equal. I have rarely met a cup of coffee that I won’t drink (a little soy milk goes a long way) but I know others who won’t touch, say a gas station brew and insist upon espresso.
    
    by scientificamerican.com`;

    date.innerHTML = 'by Tip Joy on apr 16 19"';
  };
};

changeArticle();

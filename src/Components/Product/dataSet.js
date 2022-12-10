import image1 from "../../Assets/beans Flour.jpg";
import image2 from "../../Assets/malt3.jpg";
import image5 from "../../Assets/orijin.jpg";
import image8 from "../../Assets/Aboliki.jpg";
import image9 from "../../Assets/MaggiKnown.jpg";
import image10 from "../../Assets/big_stout.jpg";

import { BsCartPlus } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "Beans Flour",
    price: 30,
    image: image1,
    quantity: 1,
    active:false,
    add: <BsCartPlus />,
    description:
      "Beans Flour can be used in the preparation of bean cakes (Akara), Moi-moi and other local delicacies that require a lot of tedious work like soaking of the beans, cleaning, peeling and grinding.",
  },
  {
    id: 2,
    name: "Malt",
    price: 10,
    quantity: 1,
    active:false,
    image: image2,
    add: <BsCartPlus />,
    description:
      "Classic Non-Alcoholic Malt Drink Maltina is a natural drink which provide the extra nourishment to build, protect and revitalize your body. Its delicious, rich and creamy taste can be enjoyed by everyone, everytime.",
  },

  {
    id: 3,
    name: "Orijin Bitters",
    price: 20,
    image: image5,
    active:false,
    quantity: 1,
    add: <BsCartPlus />,
    description:
      "Orijin Bitters is a unique bittersweet spirit, blended with the flavours of specially selected African herbs and fruits, combined to give a bitter-sweet taste. Orijin Bitters exist to promote the vibrancy of modern African culture. Orijin Bitters is a unique bittersweet spirit, blended with the flavours of specially selected African herbs and fruits, combined to give a bitter-sweet taste.",
  },

  {
    id: 4,
    name: "Aboliki",
    price: 23,
    active:false,
    image: image8,
    quantity: 1,
    add: <BsCartPlus />,
    description:
      "BONIKI BALM relieves pains, strains, cold, muscles aches, waist and backache pains, Plantar Fasciitis, sprains and dislocations. Aboniki Balm is MADE WITH ESSENTIAL OILS - Eucalyptus oil might be the most versatile essential oil in the world! It is very effective in combating cold and flu, boosting energy.ABONIKI BALM relieves pains, strains, cold, muscles aches, waist and backache EFFECTIVE relief from Sprains EFFECTIVE relief from Muscle aches Effective relief from Muscle pains Effective relief from Cold symptoms.",
  },
  {
    id: 5,
    name: "Maggi Cube",
    price: 34,
    image: image9,
    active:false,
    quantity: 1,
    add: <BsCartPlus />,
    description:
      "Knorr Chicken Stock Cubes are made with a carefully selected blend of herbs, seasonings and chicken that delicately enhance the natural flavors of your dish.",
  },
  {
    id: 6,
    name: "Big Stout",
    price: 12,
    active:false,
    image: image10,
    quantity: 1,
    add: <BsCartPlus />,
    description:
      "Guinness Foreign Extra Stout is a black full-bodied Irish dry stout with a creamy head. The aroma is medium and balanced with a slight hint of roast and fruit. The palate is smooth with rounded flavours of bitter and sweet leading to a dry finish.",
  },
];

export default data;

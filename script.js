header {
  background-color: #eee;
  padding: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

header img {
  max-width: 100px;
}

footer {
  background-color: #293133;
  color: #fff;
  padding: 20px;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.logo {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

.primary-color {
  color: #333;
}

.secondary-color {
  color: #999;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding: 10px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav li {
  margin: 0 10px;
}

nav li a {
  text-decoration: none;
  color: #333;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}


document.addEventListener('DOMContentLoaded', (event) => {

const swiper = new Swiper('.swiper', {
  //enable hash navigation
  hashNavigation: true,
});

.swiper {
  width: 100%;
  height: 85%;
}

.swiper-slide {
  background: #DD925F;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination{
	align-items: center;
}

.swiper-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #79553d;
  font-size: 24px;
}

.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
}

.product-card img {
  max-width: 200px;
}

.product-info {
  flex: 1;
  margin-left: 20px;
}

.product-info h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.product-info p {
  font-size: 18px;
  margin-bottom: 20px;
}

.product-details {
  display: flex;
  margin-bottom: 20px;
}

.product-details label {
  font-size: 18px;
  margin-right: 10px;
}

.product-details select,
.product-details input[type="number"] {
  font-size: 18px;
}

.add-to-cart {
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table th,
.cart-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.cart-table th {
  background-color: #eee;
}

.cart-table img {
  max-width: 100px;
}

.cart-table input[type="number"] {
  width: 50px;
}

.cart-table .remove-from-cart {
  padding: 5px 10px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.search-form {
  display: flex;
  margin: 20px 0;
}

.search-form input[type="text"] {
  flex: 1;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ddd;
}

.search-form button {
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.product-list li {
  flex: 1;
  margin-right: 20px;
  margin-bottom: 20px;
  max-width: 300px;
}

.product-list li a {
  display: block;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.product-list li img {
  max-width: 200px;
  margin-bottom: 10px;
}

.product-list li h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-list li p {
  font-size: 18px;
  margin-bottom: 10px;
}

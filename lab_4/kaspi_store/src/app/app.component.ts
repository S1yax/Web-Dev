import { Component, OnInit } from '@angular/core';
import {RouterOutlet, ɵEmptyOutletComponent} from '@angular/router';
import {ProductCardComponent} from './products/product-card/product-card.component';
import {NgForOf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ɵEmptyOutletComponent, ProductCardComponent, NgForOf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  searchQuery: string = '';
filteredProducts: typeof this.products = [];

ngOnInit() {
  this.filteredProducts = this.products;
}

filterProducts(): void {
  const query = this.searchQuery.trim().toLowerCase();

  if (!query) {
    this.filteredProducts = this.products;
    return;
  }

  this.filteredProducts = this.products.filter(product =>
    product.name.toLowerCase().includes(query)
  );
}

  products = [
    {
      image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/clx/clx32081/v/8.jpg',
      name: 'Celimax, бальзам для укрепления сетчатки, 15 мл (0,5 жидк. унции)',
      description: 'Бальзам для укрепления сетчатки глаз от Celimax. Поддерживает здоровье глаз и улучшает состояние сетчатки.',
      price: 9303,
      link: 'https://kaspi.kz/shop/p/celimax-celimax-retinol-shot-nabor-po-uhodu-za-litsom-dlja-zhenschin-136995181/?c=750000000',
      rating:4,
      commentsNumber: 21,
      commentsLink: '#'
    },
    {
      image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/clx/clx56292/v/16.jpg',
      name: 'Celimax, Ji Woo Gae, пенка для очищения пор с пищевой содой, 150 мл',
      description: 'Пенка для комбинированной и жирной кожи с пищевой содой. Эффективно очищает поры и удаляет излишки себума.',
      price: 6000,
      link: 'https://kaspi.kz/shop/p/celimax-ji-woo-gae-cica-bha-acne-penka-150-ml-108133175/?c=750000000',
      rating: 4.6,
      commentsNumber:515,
      commentsLink: '#'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p9c/9544439.jpeg?format=gallery-medium',
      name: 'Косметичка из стеганого хлопка с цветочным принтом',
      description: 'Большая вместительная косметичка. Портативная и милая — идеально для путешествий и студенток.',
      price: 4630,
      link: 'https://kaspi.kz/shop/p/kosmetichka-tekstil-16x25-sm-124006327/?c=750000000',
      rating: 5,
      commentsNumber: 117,
      commentsLink: '#'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p90/p35/18075346.png?format=gallery-large',
      name: 'Внешний аккумулятор Powerbank-6в1-Purpur 10000 мАч фиолетовый',
      description: 'Универсальный powerbank 6в1 ёмкостью 10000 мАч. Стильный фиолетовый цвет.',
      price: 15000,
      link: 'https://kaspi.kz/shop/p/powerbank-6v1-purpur-10000-mach-fioletovyi-132847661/?srsltid=AfmBOoo0ZX4nAhPdYeLvEYYf655Gx6N-kXO1QAWtvlqMDyxOFrjmEx2F',
      rating: 4.8,
      commentsNumber: 37,
      commentsLink: '#'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/pc2/71084483.png?format=preview-large',
      name: 'Внешний аккумулятор Powerbank-6в1-Purpur 10000 мАч черный',
      description: 'Компактный внешний аккумулятор 10000 мАч. Подходит для смартфонов и других устройств.',
      price: 9990,
      link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-estellax-magsafe-pro-10000-mach-22-5-vt-chernyi-146052662/?c=750000000',
      rating: 5,
      commentsNumber: 3119,
      commentsLink: '#'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h14/87245272285214.jpg?format=gallery-medium',
      name: 'Корзина универсальная 26x20x12.5 см',
      description: 'Металл, пластик, солома. Удобная корзина для хранения вещей дома.',
      price: 2958,
      link: 'https://kaspi.kz/shop/p/korzina-3-korzinki-26x20x12-5-sm-metall-plastik-soloma-124081538/?c=750000000',
      rating: 4.6,
      commentsNumber: 33,
      commentsLink: '#'
    },
  
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf9/p32/47270627.jpg?format=gallery-medium',
      name: 'Наушники Edifier H9 черный',
      description: 'Беспроводная накладная гарнитура с закрытым акустическим оформлением и системой активного шумоподавления. Подходит для любых задач — работы, игр и прослушивания музыки. Оснащена оголовьем, обеспечивает частоту воспроизведения 20 Гц – 20 кГц, импеданс 32 Ом и чувствительность 96 дБ. Вес — 570 г. В комплекте: гарнитура, кабель и инструкция. Цвет — чёрный.',
      price: 25347,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000',
      rating: 5.00,
      commentsNumber:2,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000'
    },
    {
      image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/rom/rom24613/v/21.jpg',
      name: 'rom&nd, Тающий бальзам Glasting, 06 Kaya Fig, 3,5 г (0,12 унции)',
      description: 'Glasting Melting Balm - это увлажняющий бальзам с увлажняющим маслом на растительной основе, которое не пересыхает! Обеспечивает прозрачное и гладкое водянистое сияние без ощущения заложенности кожи. Система удержания воды образует очень увлажняющую защитную пленку, которая не пропускает влагу.',
      price: 6500,
      link: 'https://kaspi.kz/shop/p/romand-glasting-melting-balm-blesk-dlja-gub-07-mauve-whip-109457246/?c=750000000',
      rating: 5.00,
      commentsNumber: 320,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-fioletovyi-123727182/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h93/86303746392094.jpg?format=gallery-medium',
      name: 'Apple iPhone 15 256Gb Light Blue',
      description: 'Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design.',
      price: 428520,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-goluboi-113137931/?c=750000000',
      rating: 4,
      commentsNumber: 228,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-goluboi-113137931/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-small',
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Apple MacBook Air 13 2020 — лёгкий и производительный ноутбук с 13,3″ Retina-экраном (2560×1600), процессором Apple M1 (8-ядерный CPU, 7-ядерный GPU), 8 ГБ оперативной памяти и SSD на 256 ГБ. Работает на macOS, поддерживает Wi-Fi 6 и Bluetooth 5.0, оснащён Touch ID и двумя портами Thunderbolt/USB-C.',
      price: 439776,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-rozovyi-123726806/?c=750000000',
      rating: 5,
      commentsNumber: 585,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-rozovyi-123726806/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/hc3/86303335350302.jpg?format=gallery-medium',
      name: 'Apple iPhone 15 256Gb Light Pink',
      description: 'Apple iPhone 15 is a smartphone that combines advanced optics, a powerful processor, a long-lasting battery and a memorable design. The smartphone has a dynamic island that displays notifications and other important information.',
      price: 447754,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-rozovyi-113137951/?c=750000000',
      rating: 5,
      commentsNumber: 166,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-rozovyi-113137951/?c=750000000&tab=reviews'
    }
  ]
}

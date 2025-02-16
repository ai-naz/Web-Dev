import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';

  products = [
    {
      name: 'Fujifilm instax mini 12 green',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12 зеленый',
      price: 65000,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-zelenyi-109477192/?c=750000000&sr=7&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: ['/images/instax_green.jpeg', '/images/instax_green2.jpeg', '/images/instax_green3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Fujifilm instax mini 12 white',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12 белый',
      price: 65000,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: ['/images/instax_white.jpeg', '/images/instax_white2.jpeg','/images/instax_white3.jpeg'],
      currentImageIndex: 0
    },
    {
      name: 'Fujifilm instax mini 12 blue',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12 голубой',
      price: 65000,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-instax-mini-eu-2-goluboi-109894224/?c=750000000&sr=22&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: ['/images/instax_blue.jpeg', '/images/instax_blue2.jpeg', '/images/instax_blue3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Fujifilm instax mini 12 purple',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12 фиолетовый',
      price: 65000,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-fioletovyi-109829332/?c=750000000&sr=6&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: ['/images/instax_purple.jpeg', '/images/instax_purple2.jpeg', '/images/instax_purple3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Fujifilm instax mini 12 pink',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12 розовый',
      price: 65000,
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-rozovyi-109477187/?c=750000000&sr=10&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: ['/images/instax_pink.jpeg', '/images/instax_pink2.jpeg', '/images/instax_pink3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Fujifilm instax mini 12 case',
      description: 'Сумка Instax Mini 12 зеленый',
      price: 8000,
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-zelenyi-110559536/?c=750000000&sr=67&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
      image: ['images/case_green.jpeg', 'images/case_green2.jpeg', 'images/case_green3.png'], 
      currentImageIndex: 0 
    },
    {
      name: 'Fujifilm instax mini 12 case',
      description: 'Сумка Instax Mini 12 белый',
      price: 8000,
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-belyi-110559539/?c=750000000&sr=63&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
      image: ['images/case_white.jpeg', 'images/case_white2.jpeg', 'images/case_white3.webp'], 
      currentImageIndex: 0 
    },
    {
      name: 'Fujifilm instax mini 12 case',
      description: 'Сумка Instax Mini 12 голубой',
      price: 8000,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-sinii-110559540/?c=750000000&sr=65&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
      image: ['images/case_blue.jpeg', 'images/case_blue2.jpeg', 'images/case_blue3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Fujifilm instax mini 12 case',
      description: 'Сумка Instax Mini 12 фиолетовый',
      price: 8000,
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-fioletovyi-110559529/?c=750000000&sr=62&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
      image: ['images/case_pp.jpeg', 'images/case_pp2.jpeg', 'images/case_pp3.jpeg'], 
      currentImageIndex: 0 
    },
    {
      name: 'Fujifilm instax mini 12 case',
      description: 'Сумка Instax Mini 12 розовый',
      price: 8000,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-rozovyi-110559531/?c=750000000&sr=60&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
      image: ['images/case_pink.jpeg', 'images/case_pink2.jpeg', 'images/case_pink3.jpeg'], 
      currentImageIndex: 0 
    }
  ];

  nextImage(product: any) {
    if (product.currentImageIndex < product.image.length - 1) {
      product.currentImageIndex++;
    } else {
      product.currentImageIndex = 0; 
    }
  }

  prevImage(product: any) {
    if (product.currentImageIndex > 0) {
      product.currentImageIndex--;
    } else {
      product.currentImageIndex = product.image.length - 1; 
    }
  }

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
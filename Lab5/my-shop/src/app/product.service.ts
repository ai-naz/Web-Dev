import { Injectable } from '@angular/core';
import { Product } from './product.model'; 

@Injectable({ providedIn: 'root' })
export class ProductService {
    private products: { [key: string]: Product[] } = {     
        "Instax mini":
         [
    {
      id: 1,
      name: 'Fujifilm instax mini 12 green',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12',
      price: 65000,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: 'assets/images/instax_green.jpeg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 2,
      name: 'Fujifilm instax mini 12 white',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12',
      price: 65000,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: 'assets/images/instax_white.jpeg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 3,
      name: 'Fujifilm instax mini 12 pink',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12',
      price: 65000,
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: 'assets/images/instax_pink.jpeg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 4,
      name: 'Fujifilm instax mini 12 blue',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12',
      price: 65000,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: 'assets/images/instax_blue.jpeg',
      currentImageIndex: 0,
      likes: 0
    },
    {
      id: 5,
      name: 'Fujifilm instax mini 12 purple',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12',
      price: 65000,
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
      image: 'assets/images/instax_purple.jpeg',
      currentImageIndex: 0,
      likes: 0
    },
    ],
        "Cases": [
          { id: 6, 
            name: 'Fujifilm instax mini 12 case', 
            price: 8000, 
            image: 'assets/images/case_green.jpeg', 
            likes: 0, 
            description: 'Сумка Instax Mini 12 зеленый', 
            rating: 4.8, 
            link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-zelenyi-110559536/?c=750000000&sr=67&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
            currentImageIndex: 0 
        },
          { id: 7, 
            name: 'Fujifilm instax mini 12 case', 
            price: 8000, 
            image: 'assets/images/case_white.jpeg', 
            likes: 0, 
            description: 'Сумка Instax Mini 12 белый', 
            rating: 4.7, 
            link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-zelenyi-110559536/?c=750000000&sr=67&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
            currentImageIndex: 0 
        },
          { id: 8, 
            name: 'Fujifilm instax mini 12 case', 
            price: 8000, 
            image: 'assets/images/case_blue.jpeg', 
            likes: 0, 
            description: 'Сумка Instax Mini 12 голубой', 
            rating: 4.9, 
            link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-zelenyi-110559536/?c=750000000&sr=67&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
            currentImageIndex: 0 
      },
              { id: 9, 
                name: 'Fujifilm instax mini 12 case', 
                price: 8000, 
                image: 'assets/images/case_pp.jpeg', 
                likes: 0, 
                description: 'Сумка Instax Mini 12 фиолетовый', 
                rating: 4.2, 
                link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-zelenyi-110559536/?c=750000000&sr=67&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
                currentImageIndex: 0 
            },
            { 
              id: 10, 
              name: 'Fujifilm instax mini 12 case', 
              price: 8000, 
              image: 'assets/images/case_pink.jpeg', 
              likes: 0, 
              description: 'Сумка Instax Mini 12 розовый', 
              rating: 4.7, 
              link: 'https://kaspi.kz/shop/p/sumka-instax-mini-12-zelenyi-110559536/?c=750000000&sr=67&qid=3a8cc70aae8a43d011e74a565e0152e7&ref=shared_link',
              currentImageIndex: 0 
          },
            ],
            "Printer": [
              {
                id: 11, 
                name: 'instax mini Link 3™', 
                price: 25000, 
                image: 'assets/images/printer1.png', 
                likes: 0, 
                description: "Smartphone Printer", 
                rating: 4.5, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              },
              {
                id: 12, 
                name: "instax mini Link 2™ SPECIAL EDITION", 
                price: 25000, 
                image: 'assets/images/printer2.png', 
                likes: 0, 
                description: "Smartphone Printer", 
                rating: 4.8, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              },
              {
                id: 13, 
                name: "instax SQUARE Link™", 
                price: 25000, 
                image: 'assets/images/printer3.png', 
                likes: 0, 
                description: "Smartphone Printer", 
                rating: 4.6, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              },
              {
                id: 14, 
                name: 'instax mini Link 3™', 
                price: 25000, 
                image: 'assets/images/printer12.png', 
                likes: 0, 
                description: "Smartphone Printer", 
                rating: 4.9, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              },
              {
                id: 15, 
                name: 'instax mini Link 3™', 
                price: 25000, 
                image: 'assets/images/printer13.png',
                likes: 0, 
                description: "Smartphone Printer", 
                rating: 4.2, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              }
            ], 
            "Photo Album": [
              {
                id: 16, 
                name: "instax™ mini ALBUM 108", 
                price: 25000, 
                image: 'assets/images/accessories1.png', 
                likes: 0, 
                description: "instax™ ALBUM", 
                rating: 4.9, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              },
              {
                id: 17, 
                name: "instax™ mini ALBUM", 
                price: 50000, 
                image: 'assets/images/accessories2.png', 
                likes: 0, 
                description: "instax™ ALBUM", 
                rating: 4.6, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              },
              {
                id: 18, 
                name: "instax™ SQUARE ALBUM", 
                price: 5000, 
                image: 'assets/images/accessories3.png', 
                likes: 0, 
                description: "instax™ ALBUM", 
                rating: 4.2, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              },
              {
                id: 19, 
                name: "instax™ WIDE ALBUM", 
                price: 150000, 
                image: 'assets/images/accessories4.png', 
                likes: 0, 
                description: "instax™ ALBUM", 
                rating: 4.9, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              },
              {
                id: 20, 
                name: "instax™ mini ALBUM", 
                price: 250000, 
                image: 'assets/images/accessories5.png', 
                likes: 0, 
                description: "instax™ ALBUM", 
                rating: 4.8, 
                link: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-12-belyi-109829314/?c=750000000&sr=13&qid=1897abbc363ec6240a1c0d5d779cb859&ref=shared_link',
                currentImageIndex: 0 
              }
            ],
            
      };

  getProductsByCategory(categoryName: string) {
    return this.products[categoryName as keyof typeof this.products] || [];
  }

  getProductById(productId: number) {
    return Object.values(this.products).flat().find(p => p.id === productId);
  }

  likeProduct(productId: number) {
    const product = this.getProductById(productId);
    if (product) 
      product.likes = product.likes ? 0:1;
  }

  deleteProduct(productId: number) {
    for (let category in this.products) {
      this.products[category] = this.products[category].filter((p:Product)=>p.id!=productId)
    }
  }
}

import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listing',
  imports: [TitleCasePipe, TableModule, AccordionModule, RatingModule, FormsModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  listing = {
    id: 1,
    categories: ['best seller', 'top rated', 'budget friendly'],
    countries: ['greece'],
    cities: ['athens', 'santorini'],
    title: 'iceland northern lights escape',
    descrption: 'Discover the magic of Greece with my handcrafted travel itinerary covering the best of Athens and Santorini! From exploring ancient ruins and lively neighborhoods in Athens to soaking up breathtaking sunsets and hidden gems in Santorini, this guide is packed with must-see spots, local favorites, and insider tips. Whether you`re a first-time visitor or looking for a fresh adventure, this itinerary will help you experience the beauty, history, and vibrant culture of Greece with ease and excitement.',
    tags: ['baecation', 'culture', 'ancient history', 'spring', 'europe'],
    price: 1200,
    days: 7,
    people: [4, 6],
    views: 117,
    rating: 4.96,
    reviews: 4,
    image: 'https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-us.exoticca.com%2Fimg%2Fp%2F20743%2F401790.jpg&w=3840&q=75',
    itenerary: {
      caption: 'Head to Greece to uncover the essence of Athens as you visit its ancient Acropolis and soak up the atmosphere of the capital`s vibrant neighborhoods! Next, go island-hopping to discover the paradise beaches of Mykonos and the sublime sunsets of Santorini, two of the most sought-after Greek islands.',
      days: [
        {
          overview: 'Ready to dive into the wonders of one of the greatest civilisations of all time and walk in the footsteps of the greats, from Socrates to Aristotle? Head to your departure airport, ready for a flight to Athens*, the Greek capital. Night on board.',
          countries: ['Greece'],
          cities: ['Athens'],
          // photos: [],
          // accomodations: [],
          // activities: [],
        },
        {
          overview: 'Arrive at Athens International Airport and transfer to your hotel for check in. The remainder of the day at leisure to enjoy your first taste of Athens and rest after your flight. Discover Plaka, the oldest district of Athens, located under the Acropolis, the only district where you may see the Greek capital as it was 100 years ago or enjoy a spot of shopping at Ermou, Kolonaki and Voukourestiou streets. Overnight stay in Athens.',
          countries: ['Greece'],
          cities: ['Athens'],
          photos: [
            'https://uploads.exoticca.com/p/20743/70001/i/i2_d.jpg'
          ],
          accomodations: [{
            link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
            photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
            title: 'title',
            description: 'description',
            rating: 4.5,
          }],
          restaurants: [
            {
              link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
              photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
              title: 'title',
              description: 'description',
              rating: 3,
            },
            {
              link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
              photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
              title: 'title',
              description: 'description',
              rating: 5,
            },
            {
              link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
              photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
              title: 'title',
              description: 'description',
              rating: 2,
            }
          ],
        },
        {
          overview: 'Breakfast at the hotel. Today enjoy an Athens Sightseeing Tour including a visit to the Acropolis and the New Acropolis Museum. Begin in the center of the city, passing by Constitution Square (Syntagma), the House of Parliament, the Memorial to the Unknown Soldier and the National Library. On-route to the Acropolis you will see Hadrian’s Arch, the Temple of Olympian Zeus and a quick stop at Panathenaic Stadium, where the first Modern Olympic Games were held in 1896. During the Acropolis visit witness the architectural masterpieces of the Golden Age of Athens: the Propylaea, the Temple of Athena Nike, the Erechtheion and finally the famous Parthenon. Your first taste of Athens would not be complete without a visit to the Acropolis Museum, a modern architectural building where you can admire the wonders and architectural masterpieces of the classical era. Return to your hotel with the remainder of your day at leisure. Overnight stay in Athens. Please note: At the Athens Acropolis, the terrain is quite uneven underfoot and includes a number of stairs. It may not be suitable for those with reduced mobility. Return transfer to your hotel is included; however, once the tour ends, you will have the option to stay in the downtown area if you prefer to continue exploring the city. Note: This activity can accommodate a maximum of 50 people, and visitors will have access to audio guides during the tour.',
          countries: ['Greece'],
          cities: ['Athens'],
          photos: [
            'https://uploads.exoticca.com/p/20743/70001/i/i3_d.jpg',
            'https://res.cloudinary.com/exoticca/image/upload/c_fill,f_auto,g_auto,h_390,q_auto:eco,w_600/v1/Country/GREECE/Activities/Visita-turi%CC%81stica-guiada-a-la-ciudad-de-Atenas_02_cmkyp6'
          ],
          accomodations: [{
            link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
            photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
            title: 'title',
            description: 'description',
            rating: 2,
          }],
          activities: [{
            link: 'https://www.viator.com/tours/Athens/Athens-All-Included-Acropolis-and-Museum-In-a-Cultural-Guided-Walking-Tour/d496-51192P6',
            photo: 'https://dynamic-media.tacdn.com/media/photo-o/2e/af/d6/c7/caption.jpg?w=700&h=500&s=1',
            title: 'title',
            description: 'description',
            rating: 3,
          }],
          restaurants: [
            {
              link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
              photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
              title: 'title',
              description: 'description',
              rating: 3,
            },
            {
              link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
              photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
              title: 'title',
              description: 'description',
              rating: 5,
            },
            {
              link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
              photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
              title: 'title',
              description: 'description',
              rating: 2,
            }
          ],
        },
        {
          overview: 'Breakfast at the hotel. Today you`ll visit the striking rock formation, Meteora, an incredibly unique scenery with ageless Monasteries protruding from the rocks. These priceless historical and religious treasures stand between sky and earth on the top of the cliffs. An incredible sight to behold.',
          countries: ['Greece'],
          cities: ['Meteroa', 'Athens'],
          photos: [
            'https://uploads.exoticca.com/p/20743/70001/i/i5_d.jpg'
          ],
          accomodations: [{
            link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
            photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
            title: 'title',
            description: 'description',
            rating: 4.5,
          }],
          // activities: [],
        },
      ]
    },
    accomodations: [{
      link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
      photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
      title: 'title',
      description: 'description',
      rating: 4.5,
    },
    {
      link: 'https://www.tripadvisor.com/Hotel_Review-g189400-d13338412-Reviews-Athenaeum_K29-Athens_Attica.html?m=19905',
      photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5c/1f/a2/k29.jpg?w=1000&h=-1&s=1',
      title: 'title',
      description: 'description',
      rating: 3,
    },
    ]
  }

  handleLink(link: string) {
    window.open(link, '_blank');
  }
}

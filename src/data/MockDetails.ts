export const mockTripItineraries = { 
    
    flights: [
    {
      flightName: "American Airlines",
      flightCode: "AA-829",
      flightType: "Economy",
      takeOffDateAndTime: "08:31 Sun 20 Aug",
      arrivalDateAndTime: "10:16 Sun 20 Aug",
      flightDuration: "1h 45m",
      flightDirection: "Nigeria → Ghana",
      flightPrice: 123450.0,
      facilities: {
        baggage: "20kg",
        cabinBaggage: "8kg",
        inflightEntertainment: true,
        usbPort: true,
      },
    },
    {
      flightName: "Delta Airlines",
      flightCode: "DL-403",
      flightType: "Business",
      takeOffDateAndTime: "14:15 Mon 21 Aug",
      arrivalDateAndTime: "17:45 Mon 21 Aug",
      flightDuration: "3h 30m",
      flightDirection: "Ghana → Kenya",
      flightPrice: 345600.0,
      facilities: {
        baggage: "30kg",
        cabinBaggage: "10kg",
        inflightEntertainment: true,
        usbPort: true,
      },
    },
    {
      flightName: "Qatar Airways",
      flightCode: "QR-505",
      flightType: "First Class",
      takeOffDateAndTime: "22:45 Tue 22 Aug",
      arrivalDateAndTime: "05:30 Wed 23 Aug",
      flightDuration: "6h 45m",
      flightDirection: "Kenya → UAE",
      flightPrice: 678900.0,
      facilities: {
        baggage: "40kg",
        cabinBaggage: "15kg",
        inflightEntertainment: true,
        usbPort: true,
      },
    },
    {
      flightName: "Air Peace",
      flightCode: "AP-102",
      flightType: "Economy",
      takeOffDateAndTime: "09:00 Wed 23 Aug",
      arrivalDateAndTime: "11:15 Wed 23 Aug",
      flightDuration: "2h 15m",
      flightDirection: "Nigeria → South Africa",
      flightPrice: 150000.0,
      facilities: {
        baggage: "25kg",
        cabinBaggage: "8kg",
        inflightEntertainment: false,
        usbPort: true,
      },
    },
    {
      flightName: "Emirates",
      flightCode: "EK-320",
      flightType: "Business",
      takeOffDateAndTime: "18:00 Thu 24 Aug",
      arrivalDateAndTime: "00:30 Fri 25 Aug",
      flightDuration: "6h 30m",
      flightDirection: "South Africa → UAE",
      flightPrice: 499999.0,
      facilities: {
        baggage: "35kg",
        cabinBaggage: "12kg",
        inflightEntertainment: true,
        usbPort: true,
      },
    },
  ],
  
 hotels: [
    {
      hotelName: "Riviera Resort, Lekki",
      hotelAddress: "18, Kenneth Agbakuru Street, Lekki Phase 1",
      showInMap: true,
      hotelRating: 8.5,
      roomType: "King size room",
      pricePerNight: 123450.0,
      totalPrice: 560000.0,
      stayDetails: "1 room x 10 nights incl. taxes",
      facilities: {
        wifi: "Free",
        spa: true,
        service24_7: true,
      },
    },
    {
      hotelName: "Eko Hotels and Suites",
      hotelAddress: "Victoria Island, Lagos",
      showInMap: true,
      hotelRating: 9.0,
      roomType: "Luxury suite",
      pricePerNight: 250000.0,
      totalPrice: 1250000.0,
      stayDetails: "1 suite x 5 nights incl. taxes",
      facilities: {
        wifi: "Free",
        spa: true,
        service24_7: true,
      },
    },
    {
      hotelName: "Protea Hotel by Marriott",
      hotelAddress: "Asokoro, Abuja",
      showInMap: true,
      hotelRating: 8.7,
      roomType: "Deluxe Room",
      pricePerNight: 150000.0,
      totalPrice: 450000.0,
      stayDetails: "1 room x 3 nights incl. taxes",
      facilities: {
        wifi: "Free",
        spa: false,
        service24_7: true,
      },
    },
    {
      hotelName: "Hilton Hotel",
      hotelAddress: "Transcorp, Abuja",
      showInMap: true,
      hotelRating: 9.3,
      roomType: "Presidential Suite",
      pricePerNight: 800000.0,
      totalPrice: 2400000.0,
      stayDetails: "1 suite x 3 nights incl. taxes",
      facilities: {
        wifi: "Free",
        spa: true,
        service24_7: true,
      },
    },
    {
      hotelName: "Four Points by Sheraton",
      hotelAddress: "Victoria Island, Lagos",
      showInMap: true,
      hotelRating: 8.9,
      roomType: "Standard Room",
      pricePerNight: 200000.0,
      totalPrice: 600000.0,
      stayDetails: "1 room x 3 nights incl. taxes",
      facilities: {
        wifi: "Paid",
        spa: false,
        service24_7: true,
      },
    },
  ],
  
   activities:  [
    {
      activityName: "Safari Tour, Lekki",
      activityDescription: "Safari in Lekki Reserve",
      showInMap: true,
      activityRating: 9.5,
      groupType: "Group Tour",
      activityPrice: 40000.0,
      duration: "1 Person x 2 Days",
      facilities: {
        guide: true,
        transport: true,
        snacks: true,
      },
    },
    {
      activityName: "Beach Fun, Tarkwa Bay",
      activityDescription: "Day trip to Tarkwa Bay Beach",
      showInMap: true,
      activityRating: 8.8,
      groupType: "Family Trip",
      activityPrice: 30000.0,
      duration: "1 Group x 1 Day",
      facilities: {
        guide: false,
        transport: true,
        snacks: false,
      },
    },
    {
      activityName: "Cultural Tour, Abuja",
      activityDescription: "Experience Abuja’s rich culture",
      showInMap: true,
      activityRating: 9.2,
      groupType: "Private Tour",
      activityPrice: 75000.0,
      duration: "1 Person x 1 Day",
      facilities: {
        guide: true,
        transport: true,
        snacks: true,
      },
    },
    {
      activityName: "Hiking, Obudu Hills",
      activityDescription: "Guided hike at Obudu Mountain",
      showInMap: true,
      activityRating: 8.5,
      groupType: "Adventure Group",
      activityPrice: 50000.0,
      duration: "1 Person x 3 Days",
      facilities: {
        guide: true,
        transport: false,
        snacks: true,
      },
    },
    {
      activityName: "Boat Cruise, Lagos Lagoon",
      activityDescription: "Luxury cruise on Lagos Lagoon",
      showInMap: true,
      activityRating: 9.7,
      groupType: "Couple’s Cruise",
      activityPrice: 120000.0,
      duration: "2 Persons x 1 Day",
      facilities: {
        guide: false,
        transport: true,
        snacks: true,
      },
    },
  ]
};
  
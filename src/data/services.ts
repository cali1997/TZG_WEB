import { Network, Monitor, Camera, Wrench, Smartphone } from 'lucide-react';

export interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  prices: Array<{
    name: string;
    price: string;
    description: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'ict-netwerk',
    icon: Network,
    title: 'ICT Netwerk',
    description: 'Netwerk installatie, configuratie en optimalisatie voor bedrijven en particulieren',
    prices: [
      {
        name: 'Netwerk installatie',
        price: '€75/uur',
        description: 'Professionele installatie van netwerkapparatuur'
      },
      {
        name: 'Netwerk configuratie',
        price: '€60/uur',
        description: 'Configuratie van routers, switches en firewalls'
      },
      {
        name: 'Netwerk optimalisatie',
        price: '€85/uur',
        description: 'Verbetering van netwerkprestaties en beveiliging'
      }
    ]
  },
  {
    id: 'computer-beheer',
    icon: Monitor,
    title: 'Computer Beheer',
    description: 'Volledig beheer en onderhoud van uw IT-infrastructuur',
    prices: [
      {
        name: 'Server beheer',
        price: '€90/uur',
        description: 'Beheer en onderhoud van servers'
      },
      {
        name: 'Werkstation beheer',
        price: '€65/uur',
        description: 'Beheer van werkstations en laptops'
      },
      {
        name: 'IT onderhoud contract',
        price: 'Op aanvraag',
        description: 'Maandelijks onderhoud en support'
      }
    ]
  },
  {
    id: 'camera-installatie',
    icon: Camera,
    title: 'Camera Installatie',
    description: 'Professionele beveiligingscamera\'s installeren en configureren',
    prices: [
      {
        name: 'Camera installatie',
        price: '€150 per camera',
        description: 'Inclusief montage en basisinstallatie'
      },
      {
        name: 'NVR/DVR configuratie',
        price: '€200',
        description: 'Installatie en configuratie van opnamesysteem'
      },
      {
        name: 'Remote viewing setup',
        price: '€75',
        description: 'Toegang op afstand via smartphone/tablet'
      }
    ]
  },
  {
    id: 'pc-reparatie',
    icon: Wrench,
    title: 'PC Reparatie',
    description: 'Hardware en software problemen snel en effectief oplossen',
    prices: [
      {
        name: 'Diagnose',
        price: '€35',
        description: 'Grondige analyse van het probleem'
      },
      {
        name: 'Software reparatie',
        price: '€55/uur',
        description: 'Verwijderen van virussen, herinstallatie OS, etc.'
      },
      {
        name: 'Hardware reparatie',
        price: '€70/uur',
        description: 'Vervanging en reparatie van hardware componenten'
      }
    ]
  },
  {
    id: 'telefoon-reparatie',
    icon: Smartphone,
    title: 'Telefoon Reparatie',
    description: 'Reparatie van smartphones en tablets, alle merken',
    prices: [
      {
        name: 'Scherm reparatie',
        price: 'Vanaf €79',
        description: 'Afhankelijk van model en merk'
      },
      {
        name: 'Batterij vervanging',
        price: 'Vanaf €49',
        description: 'Originele batterijen, alle merken'
      },
      {
        name: 'Overige reparaties',
        price: 'Op aanvraag',
        description: 'Camera, luidspreker, microfoon, etc.'
      }
    ]
  }
];

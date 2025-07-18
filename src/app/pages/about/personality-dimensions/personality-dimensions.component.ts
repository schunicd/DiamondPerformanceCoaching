import { Component } from '@angular/core';

@Component({
  selector: 'app-personality-dimensions',
  templateUrl: './personality-dimensions.component.html',
  styleUrls: ['./personality-dimensions.component.css']
})
export class PersonalityDimensionsComponent {
  selectedCard: any = null;

 cards = [
  {
    title: 'Inquiring Green',
    icon: '../../../assets/about_pd_inq_green.png',
    modalImage: '../../../assets/about_pd_modal_green.png',
    color: '#007a4d',
    description: [
      'Inquiring Greens tend to be independent, inquisitive, logical, rational, innovative, analytical, and strategic thinkers. They need to feel, and be seen as knowledgeable and competent. Inquiring Greens are big picture thinkers who want to understand how and why things work, and are great at thinking outside the box.',
      'Inquiring Greens can be excellent at research; they like to ask lots of questions and look at the facts. Whether they are about to make a big purchase, or undertake a project, having all the facts and being able to share them make Inquiring Greens feel confident.'
    ]
  },
  {
    title: 'Resourceful Orange',
    icon: '../../../assets/about_pd_rsc_orange.png',
    modalImage: '../../../assets/about_pd_modal_orange.png',
    color: '#f37722',
    description: [
      '​Resourceful Oranges tend to be adaptable, eager, generous, quick-witted, realistic, and competitive. They need a lot of activity and variety in their lives. Resourceful Oranges are natural doers; they think well on the spot, and are quick to act.',
      'Resourceful Oranges can be great multi-taskers. They thrive in situations that are flexible that give them to the freedom to act on things and express themselves. Resourceful Oranges are confidant when taking risks, and putting their skills into action.'
    ]
  },
  {
    title: 'Organized Gold',
    icon: '../../../assets/about_pd_org_gold.png',
    modalImage: '../../../assets/about_pd_modal_gold.png',
    color: '#fdbc36',
    description: [
      'Organized Golds tend to be dependable, punctual, reliable, loyal, practical, and sensible. Traditions and family are important to them. They need to have a sense of belonging, duty and responsibility in all areas of their lives. Organized Golds like lists – writing them out and checking things off when done.',
      'Organized Golds can be talented planners; they need structure and predictability to do their best work, and will stick to plans to see things through to the end. Timelines and deadlines are important to them and are confident when they can reflect on a job well done.'
    ]
  },
  {
    title: 'Authentic Blue',
    icon: '../../../assets/about_pd_auth_blue.png',
    modalImage: '../../../assets/about_pd_modal_blue.png',
    color: '#0066b3',
    description: [
      'Authentic Blues tend to be empathetic, supportive, people-focused, sincere, creative, and imaginative. They need to continually work on their own personal growth and build close relationships with the people around them. Authentic Blues genuinely care and want to contribute what they can to the people and things they are involved with.',
      'Authentic Blues can be amazing with motivating, supporting, and mediating. Their natural empathy and intuition gives them the ability to work well with others. Authentic Blues are confidant when there is harmony with the people around them, and can express their creativity and imagination.'
    ]
  }
];


  openModal(card: any) {
    this.selectedCard = card;
  }

  closeModal() {
    this.selectedCard = null;
  }
}

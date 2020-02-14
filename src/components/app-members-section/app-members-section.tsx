import { Component, h } from '@stencil/core';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-members-section',
})
export class AppMembersSection {
  members = [
    {
      name: 'Jedi Weller',
      image: './../../assets/headshot-jedi.png',
      title: translate('about.team.member.title.founder'),
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/jedihacks',
      github: 'https://github.com/jedihacks',
      url: '/about/jedidiah-weller',
    },
    {
      name: 'Paulina Gallo',
      image: './../../assets/headshot-paulina.png',
      title: translate('about.team.member.title.developer'),
      mail: 'paulina@openforge.io',
      twitter: 'https://twitter.com/paulpaultweets',
      github: 'https://github.com/paulpauldevelops',
      url: '/about/paulina-gallo',
    },
    {
      name: 'Rachel Bennett',
      image: './../../assets/headshot-rachel.png',
      title: translate('about.team.member.title.designer'),
      mail: 'rachel@openforge.io',
      twitter: '',
      github: '',
      url: '/about/rachel-bennett',
    },
    {
      name: 'Leon Degtar',
      image: './../../assets/headshot-leon.png',
      title: translate('about.team.member.title.operationsDirector'),
      mail: 'leon@openforge.io',
      twitter: '',
      github: '',
      url: '/about/leon-degtar',
    },
    {
      name: 'Fernando Del Olmo',
      image: './../../assets/headshot-fer.png',
      title: translate('about.team.member.title.developer'),
      mail: 'fernando@openforge.io',
      twitter: 'https://twitter.com/fdom92',
      github: 'https://github.com/Fdom92',
      url: '/about/fernando-del-olmo',
    },
    {
      name: 'Luis Chacón',
      image: './../../assets/headshot-luis.png',
      title: translate('about.team.member.title.developer'),
      mail: 'luis@openforge.io',
      twitter: 'https://twitter.com/luiskcs89',
      github: 'https://github.com/luiskcs89',
      url: '/about/luis-chacon',
    },
    {
      name: 'Claudio Del Valle',
      image: './../../assets/headshot-claudio.png',
      title: translate('about.team.member.title.developer'),
      mail: 'claudio@openforge.io',
      twitter: '',
      github: '',
      url: '/about/claudio-del-valle',
    },
    {
      name: 'Min Lee',
      image: './../../assets/headshot-min.png',
      title: translate('about.team.member.title.developer'),
      mail: 'min@openforge.io',
      twitter: '',
      github: '',
      url: '/about/min-lee',
    },
    {
      name: 'William Holloran',
      image: './../../assets/headshot-billy.png',
      title: translate('about.team.member.title.qualityManager'),
      mail: 'william@openforge.io',
      url: '/about/william-holloran',
    },
    {
      name: 'May Alkhraisha',
      image: './../../assets/headshot-may.png',
      title: translate('about.team.member.title.marketingCoordinator'),
      mail: 'may@openforge.io',
      twitter: '',
      github: '',
      url: '/about/may-alkhraisha',
    },
    {
      name: 'Mariela Mora Quesada',
      image: './../../assets/headshot-mariela.png',
      title: translate('about.team.member.title.projectManagement'),
      mail: 'mariela@openforge.io',
      twitter: '',
      github: '',
      url: '/about/mariela-mora-quesada',
    },
    {
      name: 'Petrell Vereen',
      image: './../../assets/headshot-petrell.png',
      title: translate('about.team.member.title.developer'),
      mail: 'petrell@openforge.io',
      twitter: '',
      github: '',
      url: '/about/petrell-vereen',
    },
    {
      name: 'Jared Bradshaw',
      image: './../../assets/headshot-jared.png',
      title: translate('about.team.member.title.designCoordinator'),
      mail: 'jared@openforge.io',
      twitter: '',
      github: '',
      url: '/about/jared-bradshaw',
    },
    {
      name: 'Harry Scheuerle',
      image: './../../assets/headshot-harry.png',
      title: translate('about.team.member.title.developer'),
      mail: 'harry@openforge.io',
      twitter: '',
      github: '',
      url: '/about/harry-scheuerle',
    },
    {
      name: 'Matt Moran',
      image: './../../assets/headshot-matt.png',
      title: translate('about.team.member.title.developer'),
      mail: 'matt@openforge.io',
      twitter: '',
      github: '',
      url: '/about/matt-moran',
    },
    {
      name: 'Carter Simonson',
      image: './../../assets/headshot-carter.png',
      title: translate('about.team.member.title.developer'),
      mail: 'carter@openforge.io',
      twitter: '',
      github: '',
      url: '/about/carter-simonson',
    },
    {
      name: 'Griffin Robbins',
      image: './../../assets/headshot-griffin.png',
      title: translate('about.team.member.title.gameDesigner'),
      mail: 'griffin@openforge.io',
      twitter: '',
      github: '',
      url: '/about/griffin-robbins',
    },
    {
      name: 'Pablo Huerta',
      image: './../../assets/headshot-pablo.png',
      title: translate('about.team.member.title.developer'),
      mail: 'pablo@openforge.io',
      twitter: '',
      github: '',
      url: '/about/pablo-huerta',
    },
    {
      name: 'Alberto Carniel',
      image: './../../assets/headshot-alberto.png',
      title: translate('about.team.member.title.marketingSpecialist'),
      mail: 'alberto@openforge.io',
      twitter: '',
      github: '',
      url: '/about/alberto-carniel',
    },
    {
      name: 'Join Us',
      image: './../../assets/headshot-apply-now.png',
      title: translate('about.team.member.title.apply'),
      mail: '',
      twitter: '',
      github: '',
      url: '/opportunities',
    },
    // {
    //   name: 'YOU?',
    //   image: '/assets/headshot-placeholder.jpg',
    //   title: '',
    //   mail: 'geoff@openforge.io',
    //   twitter: '',
    //   github: '',
    //   url: '/opportunities/develop',
    // },
  ];

  render() {
    return <app-members members={this.members} />;
  }
}

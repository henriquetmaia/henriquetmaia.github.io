function load_papers() {

  var sections = [
    {
      'id': 'GM',
      'blurb': '',
    },
    {
      'id': 'bg',
      'blurb': '',
    },
  ]

  sections.map(function(section, i){
    var element = document.getElementById(section.id)
    if (element && section.blurb) {
      element.innerHTML = `<div class="blurb-div-h">${element.innerHTML}*<div class='blurb'>${section.blurb}</div></div>`
      // var div = document.createElement('div')
      // div.class = "blurb-div"
      // div.innerHTML = `${element.HTML}*<div class='blurb'>${section.blurb}</div>`
      // element.parentNode.replaceChild(div, element)
    }
  })

  var papers = [
    {
      'tag':'kaufman14',
      'href':'/pdf/papers/kauman2014.pdf',
      'title':'Adaptive Nonlinearity for Collisions in Complex Rod Assemblies',
      'authors':'Danny M. Kaufman, Rasmus Tamstorf, Brennan Smith, Jean-Marie Aubry, Eitan Grinspun',
      'citation':'ACM SIGGRAPH 2014',
      'blurb': ''
    },

    {
      'tag':'rosenblatt1958',
      'href':'/pdf/papers/rosenblatt1958.pdf',
      'title':'The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain',
      'authors':'F. Rosenblatt',
      'citation':'Pyschological Review 1958',
      'blurb': ''
    },
    
    {
      'tag':'lecun1989',
      'href':'/pdf/papers/lecun1989.pdf',
      'title':'Backpropagation Applied to Handwritten Zip Code Recognition',
      'authors':'Y. Lecun, B. Boser, J. S. Denker, D. Henderson, R. E. Howard, W. Hubbard, L. D. Jackel',
      'citation':'Neural Computation 1989',
      'blurb': ''
    },

    {
      'tag':'watkins1992',
      'href':'/pdf/papers/watkins1992.pdf',
      'title':'Q-Learning',
      'authors':'Christopher J.C.H. Watkins, Peter Dayan',
      'citation':'Machine Learning 1992',
      'blurb': ''
    },

    {
      'tag':'rumelhart1986',
      'href':'/pdf/papers/rumelhart1986.pdf',
      'title':'Learning Representations by Back-Propagating Errors',
      'authors':'David E. Rumelhart, Geoffrey E. Hinton, Ronald J. Williams',
      'citation':'Nature 1986',
      'blurb': ''
    },

    {
      'tag':'goodfellow2014',
      'href':'/pdf/papers/goodfellow2014.pdf',
      'title':'Generative Adversarial Nets',
      'authors':'Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio',
      'citation':'Neural Information Processing Systems 2014',
      'blurb': ''
    },

    {
      'tag':'kallweit2017',
      'href':'/pdf/papers/kallweit2017.pdf',
      'title':'Deep Scattering: Rendering Atmospheric Clouds with Radiance-Predicting Neural Networks',
      'authors':'Simon Kallweit, Thomas Muller, Brian McWilliams, Markus Gross, Jan Novak',
      'citation':'ACM Transactions on Graphics 2017',
      'blurb': ''
    },

    {
      'tag':'holden2016',
      'href':'/pdf/papers/holden2016.pdf',
      'title':'Neural Network Ambient Occlusion',
      'authors':'Daniel Holden, Jun Saito, Taku Komura',
      'citation':'ACM SIGGRAPH Asia 2016',
      'blurb': ''
    },

    {
      'tag':'laine2017',
      'href':'/pdf/papers/laine2017.pdf',
      'title':'Production-Level Facial Performance Capture Using Deep Convolutional Neural Networks',
      'authors':'Samuli Laine, Tero Karras, Timo Aila, Antti Herva, Shunsuke Saito, Ronald Yu, Hao Li, Kaakko Lehtinen',
      'citation':'Eurographics 2017',
      'blurb': ''
    },

    {
      'tag':'wei2016',
      'href':'/pdf/papers/wei2016.pdf',
      'title':'Dense Human Body Correspondences Using Convolutional Networks',
      'authors':'Lingyu Wei, Qixing Huang, Duygu Ceylan, Etienne Bouga, Hao Li',
      'citation':'IEEE CVPR 2016',
      'blurb': ''
    },

    {
      'tag':'wu2016',
      'href':'/pdf/papers/wu2016.pdf',
      'title':'Learning a Probabilistic Latent Space of Object Shapes via 3D Generative-Adversarial Modeling',
      'authors':'Jiajun Wu, Chengkai Zhang, Tianfan Xue, William T. Freeman, Joshua B. Tenenbaum',
      'citation':'Neural Information Processing Systems 2016',
      'blurb': ''
    },


    {
      'tag':'li2019',
      'href':'/pdf/papers/li2019.pdf',
      'title':'GRAINS: Generative Recursive Autoencoders for INdoor Scenes',
      'authors':'Manyi Li, Akshay Gadi Patil, Kai Xu, Siddhartha Chaudhuri, Owais Khan, Ariel Shamir, Changhe Tu, Baoquan Chen, Daniel Cohen-Or, Hao Zhang',
      'citation':'ACM SIGGRAPH 2019',
      'blurb': ''
    },


    {
      'tag':'hanocka2019',
      'href':'/pdf/papers/hanocka2019.pdf',
      'title':'MeshCNN: A Network with an Edge',
      'authors':'Rana Hanocka, Amir Hertz, Noa Fish, Raja Giryes, Shachar Fleishman, Daniel Cohen-Or',
      'citation':'ACM SIGGRAPH 2019',
      'blurb': ''
    },


    {
      'tag':'peng2018c',
      'href':'/pdf/papers/peng2018c.pdf',
      'title':'SFV: Reinforcement Learning of Physical Skills from Videos',
      'authors':'Xue Bin Peng, Angjoo Kanazawa, Jitendra Malik, Pieter Abbeel, Sergey Levine',
      'citation':'ACM Transactions on Graphics2018',
      'blurb': ''
    },


    {
      'tag':'peng2018',
      'href':'/pdf/papers/peng2018.pdf',
      'title':'Sim-to-Real Transfer of Robotic Control with Dynamics Randomization',
      'authors':'Xue Bin Peng, Marcin Andrychowicz, Wojciech Zaremba, Pieter Abbeel',
      'citation':'IEEE ICRA 2018',
      'blurb': ''
    },


    {
      'tag':'belbuteperes2018',
      'href':'/pdf/papers/belbuteperes2018.pdf',
      'title':'End-to-End Differentiable Physics for Learning and Control',
      'authors':'Filipe Belbute-Peres, Kevin A. Smith, Kelsy R. Allen, Joshua B. Tenenbaum, J. Zico Kolter',
      'citation':'Neural Information Processing Systems 2018',
      'blurb': ''
    },


    {
      'tag':'degrave2019',
      'href':'/pdf/papers/degrave2019.pdf',
      'title':'A Differentiable Physics Engine for Deep Learning in Robotics',
      'authors':'Jonas Degrave, Michiel Hermans, Joni Dambre, Francis Wyffels',
      'citation':'Frontiers in Neurorobotics 2019',
      'blurb': ''
    },


    {
      'tag':'hu2019',
      'href':'/pdf/papers/hu2019.pdf',
      'title':'ChainQueen: A Real-Time Differentiable Physical Simulator for Soft Robotics',
      'authors':'Yuanming Hu, Jiancheng Liu, Andrew Spielberg, Joshua B. Tenenbaum, William. T. Freeman, Jianju Wu, Daniela, Rus, Wojciech Matusik',
      'citation':'IEEE ICRA 2019',
      'blurb': ''
    },

    {
      'tag':'holden2015',
      'href':'/pdf/papers/holden2015.pdf',
      'title':'Learning Motion Manifolds with Convolutional Autoencoders',
      'authors':'Daniel Holden, Jun Saito, Taku Komura, Thomas Joyce',
      'citation':'ACM SIGGRAPH Asia 2015',
      'blurb': ''
    },

    {
      'tag':'liu2017',
      'href':'/pdf/papers/liu2017.pdf',
      'title':'Learning to Schedule Control Fragments for Physics-Based Characters Using Deep Q-Learning',
      'authors':'Linbin Liu & Jessica Hodgins',
      'citation':'ACM Transactions on Graphics 2017',
      'blurb': ''
    },

    {
      'tag':'peng2017',
      'href':'/pdf/papers/peng2017.pdf',
      'title':'DeepLoco: Dynamic Locomotion Skills Using Hierarchical Deep Reinforcement Learning',
      'authors':'Xue Bin Peng, Glen Berseth, Kangkang Yin, Michiel Van De Panne',
      'citation':'ACM Transactions on Graphics 2017',
      'blurb': ''
    },

    {
      'tag':'peng2018b',
      'href':'/pdf/papers/peng2018b.pdf',
      'title':'DeepMimic: Example-Guided Deep Reinforcement Learning of Physics-Based Character Skills',
      'authors':'Xue Bin Peng, Pieter Abbeel, Sergey Levine, Michiel Van De Panne',
      'citation':'ACM Transactions on Graphics 2018',
      'blurb': ''
    },

    {
      'tag':'holden2017',
      'href':'/pdf/papers/holden2017.pdf',
      'title':'Phase-Functioned Neural Networks for Character Control',
      'authors':'Daniel Holden, Taku Komura, Jun Saito',
      'citation':'ACM SIGGRAPH Asia 2016',
      'blurb': ''
    },

    {
      'tag':'bailey2018',
      'href':'/pdf/papers/bailey2018.pdf',
      'title':'Fast and Deep Deformation Approximations',
      'authors':'Stephen W. Bailey, Dave Otte, Paul Dilorenzo, James F. Obrien',
      'citation':'ACM Transactions on Graphics 2018',
      'blurb': ''
    },

    {
      'tag':'luo2017',
      'href':'/pdf/papers/luo2017.pdf',
      'title':'DeepWarp: DNN-Based Nonlinear Deformation',
      'authors':'Ran Luo, Tianjia Shao, Huamin Wang, Weiwei Xu, Kun Zhou, Yin Yang',
      'citation':'IEEE Transactions on Visualization and Computer Graphics 2018',
      'blurb': ''
    },

    {
      'tag':'wang2018',
      'href':'/pdf/papers/wang2018.pdf',
      'title':'Neural Material: Learning Elastic Constitutive Material and Damping Models from Sparse Data',
      'authors':'bin Wang, Paul Kry, Yuanming Deng, Uri Ascher, Hui Huang, Baoquen Chen',
      'citation':'ACM Transactions on Graphics 2018',
      'blurb': ''
    },

    {
      'tag':'fulton2019',
      'href':'/pdf/papers/fulton2019.pdf',
      'title':'Latent-space Dynamics for Reduced Deformable Simulation',
      'authors':'Lawson Fulton, Vismay Modi, David Duvenaud, David I. W. Levin, Alec Jacobson',
      'citation':'Comptuter Graphics Forum 2019',
      'blurb': ''
    },

    {
      'tag':'santesteban2019',
      'href':'/pdf/papers/santesteban2019.pdf',
      'title':'Learning Based Animation of Clothing for Virtual Try-On',
      'authors':'Igor Santesteban, Miguel A. Otaduy, Dan Casas',
      'citation':'Eurographics 2019',
      'blurb': ''
    },

    {
      'tag':'thuerey2019',
      'href':'/pdf/papers/thuerey2019.pdf',
      'title':'Deep Learning Methods for Reynolds-Averaged Navier-Stokes Simulations of Airfoil Flows',
      'authors':'Nils Thuerey, K. Weissenow, L. Prantl, Xiangyu Hu',
      'citation':'AIAAJ 2019',
      'blurb': ''
    },

    {
      'tag':'um2018',
      'href':'/pdf/papers/um2018.pdf',
      'title':'Liquid Splash Modeling with Neural Networks',
      'authors':'Kiwon Um Xiangyu Hu, Nils Thuerey',
      'citation':'Comptuter Graphics Forum 2019',
      'blurb': ''
    },

    {
      'tag':'xie2018',
      'href':'/pdf/papers/xie2018.pdf',
      'title':'tempoGAN: A Temporally Coherent, Volumetric GAN for Super-Resolution Fluid Flow',
      'authors':'You Xie, Erik Franz, Mengyu Chu, Nils Thuerey',
      'citation':'ACM Transactions on Graphics 2018',
      'blurb': ''
    },

    {
      'tag':'chu2017',
      'href':'/pdf/papers/chu2017.pdf',
      'title':'Data-Driven Synthesis of Smoke Flows with CNN-Based Feature Descriptors',
      'authors':'Mengyu Chu, Nils Thuerey',
      'citation':'ACM Transactions on Graphics 2017',
      'blurb': ''
    },

    {
      'tag':'kim2019',
      'href':'/pdf/papers/kim2019.pdf',
      'title':'Deep Fluids: A Generative Network for Parameterized Fluid Simulations',
      'authors':'Byungsoo Kim, Vinicius C. Azevedo, Nils Thuerey, Theodore Kim, Markus Gross, Barbara Solenthaler',
      'citation':'Eurographics 2019',
      'blurb': ''
    },

    {
      'tag':'macklin2014',
      'href':'/pdf/papers/macklin2014.pdf',
      'title':'Unified Particle Physics for Real-Time Applications',
      'authors':'Miles Macklin, Matthias Muller, Nuttapong Chentanez, Tae-Yong Kim',
      'citation':'ACM Transactions on Graphics 2014',
      'blurb': ''
    },

    {
      'tag':'faure2008',
      'href':'/pdf/papers/faure2008.pdf',
      'title':'Image-Based Collision Detection and Response Between Arbitrary Volume Objects',
      'authors':'Francois Faure, Sebastien Barbier, Jeremie Allard, Florent Falipou',
      'citation':'Eurographics 2008',
      'blurb': ''
    },

    {
      'tag':'guendelman2003',
      'href':'/pdf/papers/guendelman2003.pdf',
      'title':'Nonconvex Rigid Bodies with Stacking',
      'authors':'Eran Guendelman, Robert Bridson, Ronald Fedkiw',
      'citation':'ACM SIGGRAPH 2003',
      'blurb': ''
    },

    {
      'tag':'muller2015',
      'href':'/pdf/papers/muller2015.pdf',
      'title':'Air Meshes for Robust Collision Handling',
      'authors':'Matthias Muller, Nuttapong Chentanez, Tae-Yong Kim, Miles Macklin',
      'citation':'ACM Transactions on Graphics 2015',
      'blurb': ''
    },


  ];

  papers.map(function(paper, i){
    var element = document.getElementById(paper.tag)
    if (element) {
      if (paper.blurb) {
        element.innerHTML = `<div class="blurb-div"><a href="${paper.href}"><tag id="p_title">* ${paper.title}</tag></a><br><tag id="p_auth">${paper.authors}</tag><br>${paper.citation}<br><div class='blurb'>${paper.blurb}</div></div>`
      } else {
        element.innerHTML = `<div class="blurb-div"><a href="${paper.href}"><tag id="p_title">${paper.title}</tag></a><br><tag id="p_auth">${paper.authors}</tag><br>${paper.citation}<br></div>`
      }
    }

  })

}

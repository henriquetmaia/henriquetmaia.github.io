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
      'authors':'Simon Kallweit, Thomas Muller, Brian McWilliams, Markus GRoss, Jan Novak',
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

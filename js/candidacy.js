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
      'href':'/pdf/papers/adonis_kauman_2014.pdf',
      'title':'Adaptive Nonlinearity for Collisions in Complex Rod Assemblies',
      'authors':'Danny M. Kaufman, Rasmus Tamstorf, Brennan Smith, Jean-Marie Aubry, Eitan Grinspun',
      'citation':'ACM SIGGRAPH 2014',
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

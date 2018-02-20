let data=
[
  {
    "aim":"Are decisions more accurate with overlaid or side by side data? ",
    "graphic":{
      "type":"radar",
      "display":"sequence",
      "order":"none"
    },
    "data":{
      "type":["quantitative"],
      "normalised":["false"],
      "valueInput":["formula"],
      "yRange":[0,5,1],
      "formula":"x=y+3",
      "values":[0,4,5,6,7,8]
    },
    "question":"Pick the model with the overall best performance",
    "answer":{"type":"select"}

  },
  {
    "aim":"Do colors influence decision? ",
    "graphic":{
      "type":"bar",
      "display":"sequence",
      "order":"none"
    },
    "data":{
      "type":["quantitative"],
      "normalised":["false"],
      "valueInput":["formula"],
      "yRange":[0,5,1],
      "formula":"x=y+3",
      "values":[1,2,3,4,5]
    },
    "question":"Pick the model with the overall best performance",
    "answer":{"type":"select"}

  },
  {
    "aim":"Is scatter plot a meaningful representation for MOO? ",
    "graphic":{
      "type":"scatter",
      "display":"sequence",
      "order":"none"
    },
    "data":{
      "type":["quantitative"],
      "normalised":["false"],
      "valueInput":["formula"],
      "yRange":[0,5,1],
      "formula":"x=y+3",
      "values":[0,4,5,6,7,8]
    },
    "question":"Pick the model with the overall best performance",
    "answer":{"type":"select"}

  }
]

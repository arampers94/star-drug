const lowToHigh = (a, b) => {
  if (a.price < b.price) {
    return -1;
  } else {
    return 1
  }
}

const highToLow = (a, b) => {
  if (a.price < b.price) {
    return 1;
  } else {
    return -1;
  }
}

const topRated = (a, b) => {
  if (a.rating > b.rating) {
    return -1;
  } else {
    return 1;
  }
}

const nameAtoZ = (a, b) => {
  if (a.name[0] < b.name[0]) {
    return -1;
  } else {
    return 1;
  }
}

const nameZtoA = (a, b) => {
  if (a.name[0] < b.name[0]) {
    return 1;
  } else {
    return -1;
  }
}

const sortBy = {
  lowToHigh,
  highToLow,
  topRated,
  nameAtoZ,
  nameZtoA
}

export default sortBy;
export const purposeVariants = {
  hidden: {
    opacity: 0,
    y: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    }
  }
}

// CIRCLES

export const circleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: [0.5, 1.1, 1],
    transition: {
      delay: 0.7,
      duration: 0.7,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const eventsCircleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: [0.5, 1.1, 1],
    transition: {
      delay: 0.7,
      duration: 0.7,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

// SECTION TITLES 

export const titleVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    }
  }
}

export const eventsTitleVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    }
  }
}

export const textVariants = {
  hidden: {
    opacity: 0,
    x: 10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.2,
      duration: 0.5,
    }
  }
}

export const applyBtnVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.7,
      duration: 0.5,
    }
  }
}

// PICK UP A TASK SECTION

export const taskTitleVariants = {
  hidden: {
    opacity: 0,
    y: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.2,
      duration: 0.5,
    }
  }
}

export const photoVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: [0.8, 1.05, 1],
    transition: {
      delay: 2.2,
      duration: 0.7,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const dueVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.2,
      duration: 0.5,
    }
  }
}

export const viewMoreTasksBtnVariants = {
  hidden: {
    opacity: 0,
    x: 10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.9,
      duration: 0.5,
    }
  }
}

// EVENTS SECTION

export const eventTitleVariants = {
  hidden: {
    opacity: 0,
    y: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3.4,
      duration: 0.5,
    }
  }
} 

export const eventPhotoVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: [0.8, 1.05, 1],
    transition: {
      delay: 3.4,
      duration: 0.7,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const eventDateVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3.4,
      duration: 0.5,
    }
  }
}

export const viewMoreEventsBtnVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4.1,
      duration: 0.5,
    }
  }
}

// FELLOW GUESTS SECTION

export const guestNameVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4.6,
      duration: 0.5,
    }
  }
}

export const guestStatusVariants = {
  hidden: {
    opacity: 0,
    x: 10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4.6,
      duration: 0.5,
    }
  }
}

export const guestOccupationVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4.6,
      duration: 0.5,
    }
  }
}

export const guestPhotoVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: [0.8, 1.05, 1],
    transition: {
      delay: 4.6,
      duration: 0.7,
      type: 'spring',
      mass: 0.4,
      stiffness: 100,
      velocity: 2
    }
  }
}

export const guestDateVariants = {
  hidden: {
    opacity: 0,
    x: 10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4.7,
      duration: 0.5,
    }
  }
}

export const viewMoreFellowGuestsBtnVariants = {
  hidden: {
    opacity: 0,
    x: 10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 5.3,
      duration: 0.5,
    }
  }
}

// BUDDY SECTION

export const needHelpVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 5.8,
      duration: 0.5,
    }
  }
}

export const buddyIconVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 5.9,
      duration: 0.5,
    }
  }
}

export const buddyPhotoVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 6,
      duration: 0.5,
    }
  }
}

export const buddyNameVariants = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 6.1,
      duration: 0.5,
    }
  }
}

export const buddyEmailVariants = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 6.2,
      duration: 0.5,
    }
  }
}

// NEXT BTN

export const nextBtnVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 6.7,
      duration: 0.5,
    }
  }
}


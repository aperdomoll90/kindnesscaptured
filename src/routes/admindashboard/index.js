import React from 'react'

const pending = [
  {
    orderId: 999,
    orderStatus: 'pending',
    intakeMethods: 'delivery',
    dateRange: {
      earliest: '2021-01-01',
      latest: '2021-01-31',
    },
    deliveryDate: '2021-01-15',
    clientInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: '',
      phoneNumber: '',
    },
    items: [
      {
        type: 'sofa',
        itemStatus: 'aproved',
        pickable: true,
        pets: true,
        smoke: false,
        waterDamage: false,
        otherDamage: true,
        denialReason: '',
        photos: ['/ashdba', '/asdasd', '/asdasd'],
      },
    ],
  },
]

export default function Admindashboard() {
  function getPending() {}
  function getApproved() {}

  return <div>admindashboard</div>
}

# Lookups - nested & $in

Let we have concert with nested ticketIds, and we wanna fill in array of tickets with its data then we need use $lookup

```js
// Concert here is mongoose model
return Concert
  .aggregate([
    { $match: {channel: ObjectId(channelId)} },
    
    {
      $lookup: {
        from: 'tickets',
        as: 'tickets,
        let: { ticketIds: "$tickets"},

        pipeline: [
          { $match: {$expr: { $in: ['$_id', '$$ticketIds']  }} },
        
          // price
          {
            $lookup: {
              from: 'components_global_prices',
              localField: 'price.ref',
              foreignField: '_id',
              as: 'price',
            }
          },
        ],
      }
    },

    { $project : { ...excludeFields, tickets: excludeFields }},
  ])  
```


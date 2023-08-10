const express = require('express');
const router = express.Router();
const PokeContainer = require('../../models/pokeContainer')
const Poke = require('../../models/poke')


router.get('/getContainer', async (req, res) => {
  let containerList = []  
  try {
      containerList = await PokeContainer.find()      
      return res.json(containerList)
    } catch (error) {
      console.log(error)
      return res.json(error)
    }
})

router.get('/getPokes', async (req, res) => {
  let pokeList = []  
  try {
    pokeList = await Poke.find({pokesContainerId: req.query.containerId})
      return res.json(pokeList)
    } catch (error) {
      console.log(error)
      return res.json(error)
    }
})

router.post('/setPokeContainer', async (req, res) => {
  //get body data
  const data = req.body // map to model
  //save data on db pokeContainer
  try {
    const pokeContainerDB = new PokeContainer({
      name:data.name + '-' + Date.now().toString(),
      status:'process',
      date: Date.now()
    })
    await pokeContainerDB.save()
    return res.json(pokeContainerDB)
    
  } catch (error) {
    return res.json(error)
  }
  //foreach item save the information

  //return succes or error response

  // return resp.json(
  //   {
  //     pokeList: [{id:1, name: 'test1'},{id:1, name: 'test1'}]
  //   }
  //  )  
});
router.post('/setPokeList', async (req, res) => {
  //get body data
  const data = req.body // map to model
  const pokesContainerId = data.pokesContainerId
  const pokes = data.pokes
  let pokesSaved = 0;
  //save data on db pokeContainer
  try {
    pokes.forEach(poke => {
      const pokeDB = new Poke({
        pokesContainerId: pokesContainerId,
        name:poke.name,
        url: poke.url        
      })
      pokeDB.save()
      pokesSaved++;  
    });
    if(pokesSaved == pokes.length) {
      // update container to be ready and need tio be notify
      const filter = {_id: pokesContainerId }
      const update = { status: 'processBeNotify' };

      PokeContainer.findById(filter._id)
      .then((item) => {
        item.status = update.status;
        item.save()
      });     
    }    
    return res.json({pokesSaved: pokesSaved})    
  } catch (error) {
    console.log(error)
    return res.json({pokesSaved: pokesSaved, error: error})
  }
});

router.post('/setStatusPokeContainer', async (req, res) => {
  //get body data
  const data = req.body // map to model
  const pokesContainerId = data.pokesContainerId
  //save data on db pokeContainer
  try {
      // update container to be ready and need tio be notify
      const filter = {_id: pokesContainerId }
      
      PokeContainer.findById(filter._id)
      .then(async (item) => {
        if(item.status == 'processBeNotify') {
          item.status = 'processNotify';
          await item.save()
          return res.json({updated: true})
        } else {
          return res.json({updated: false})
        }        
      });
           
    }catch (error) {
    console.log(error)
    return res.json({pokesSaved: pokesSaved, error: error})
    }
  });

module.exports = router;
QUnit.test("isItemInInv should return the index of an item if it is in the inventory array", assert => {
  assert.equal(
    getItemIndex("thingamajig", [[2, "other thing"], [3, "thingamajig"], [4, "wotsit"]]),
    1
  )
});

QUnit.test("isItemInInv should return -1 if the item is not in the inventory array", assert => {
  assert.equal(
    getItemIndex("thingamabob", [[2, "other thing"], [3, "thingamajig"], [4, "wotsit"]]),
    -1
  )
});

QUnit.test("If item from new inventory (array2) is not in current inventory (array1) then it should be added to it", assert => {
  assert.deepEqual(
    updateInventory([[1, "other thing"]], [[3, "thingamajig"]]),
    [[1, "other thing"], [3, "thingamajig"]]);
});

QUnit.test("If an item is in the new and current inventories, the result should be the sum of the two quantities", assert => {
  assert.deepEqual(
    updateInventory([[2, "thingamajig"]], [[3, "thingamajig"]]), 
    [[5, "thingamajig"]]
  );
});

QUnit.test("If the added inventory contains new and existing items, both should be updated accordingly", assert => {
  assert.deepEqual(
    updateInventory([[2, "thingamajig"], [1, "wotsit"]], [[3, "thingamajig"]]), 
    [[5, "thingamajig"], [1, "wotsit"]]
  );
});

QUnit.test("sortInvByName short sort an inventory alphabetically by the names of the inventory's items", assert => {
  testArray = [[1, "a thing"], [3, "thingamajig"], [2, "wotsit"], [20, "another thing"]]
  assert.deepEqual(
    testArray.sort(sortInvByItemName),
    [[1, "a thing"], [20, "another thing"], [3, "thingamajig"], [2, "wotsit"]]
  );
});

QUnit.test("The resulting inventory should be in alphabetical order", assert => {
  assert.deepEqual(
    updateInventory([[2, "thingamajig"]], [[2, "other thing"], [3, "thingamajig"]]), 
    [[2, "other thing"], [5, "thingamajig"]]
  );
});
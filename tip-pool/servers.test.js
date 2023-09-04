describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server if Server Name field is an empty string "", allServers.length should be zero', () => {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toBe(0);
  })

  it('should update #servertable on updateServerTable()', () => {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');
     
    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
  })
  
  afterEach(function() {
    // teardown logic
    // if(Object.keys(allServers).length != 0){
    //   serverNameInput.value = '';
    //   delete allServers['server' + serverId];
    //   serverTbody.lastChild.remove();
    // }
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
    
  });
  
});

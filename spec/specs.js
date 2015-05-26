describe('cryptosquare', function() {
  it("will return an array of strings, each of length of the root of the original string rounded up to the nearest int.", function() {
    expect(cryptosquare("Hello, my name is Inigo Montoya, you killed my father, prepare to die.")).to.eql("hagaeeeemoydrtlemompoliouyrdosnkfeimitiapeynoltaniylhr");
  });
});

// (["hellomyn", "ameisini", "gomontoy", "ayoukill", "edmyfath", "erprepar", "etodie"]);

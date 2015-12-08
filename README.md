# MochaBlockMaker

Makes Blocks

### Demo:

```javascript
@import "MochaBlockMaker.js"

var array = NSArray.arrayWithArray([ "one", "two", "three" ]);
var i = 0;

array.enumerateObjectsUsingBlock(MochaBlockMaker(function(){
	i++;
}));

log(i);
```

### Caveats:

- Doesn't handle arguments without crashing (?) only tested example above with `function(i){}` so I may be wrong
- Hacky, but what isn't
- Maybe unstable (?). Test it and let me know.
- It's 9 AM

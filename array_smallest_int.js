class SmallestIntegerFinder {
  findSmallestInt(args) {
   args.sort(function(a, b){return b-a});
   return args[args.length - 1];
  }
}

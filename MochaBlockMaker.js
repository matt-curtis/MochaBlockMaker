//
//  MochaBlockMaker.js
//
//  Created by Matt Curtis
//  Copyright (c) 2015. All rights reserved.
//

var MochaBlockMaker = function(func){
	var outputBlock;

	var shimClassName = "MCBlockMakingFactory_MOClassDescription_" + NSUUID.UUID().UUIDString();
	var shimClassDesc = MOClassDescription.allocateDescriptionForClassWithName_superclass_(shimClassName, MOClassDescription);

	//	There's a certain amount of cheekiness in using MOClassDescription to hack MOClassDescription

	shimClassDesc.registerClass();

	var selectorToSwizzle = NSSelectorFromString("addInstanceMethodWithSelector:typeEncoding:block:");

	shimClassDesc.addInstanceMethodWithSelector_function_(selectorToSwizzle, function(selector, typeEncoding, block){
		outputBlock = block;

		return false;
	});

	//	Invoke desired call chain

	NSClassFromString(shimClassName).new().addInstanceMethodWithSelector_function_(null, func);

	//	Ta-dah!

	return outputBlock;
};

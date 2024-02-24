import {
	type StackContext,
	Bucket,
	SvelteKitSite
} from 'sst/constructs';
export function API({ stack }:StackContext) {
	// const bucket = new Bucket(stack, 'public');
	const site = new SvelteKitSite(stack, 'site', {
		// bind: [bucket]
	});
	stack.addOutputs({
		url: site.url
	});
}
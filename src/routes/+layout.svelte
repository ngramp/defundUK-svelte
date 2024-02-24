<script lang="ts">
	import '../app.css';
	import { SignIn, SignOut } from '@auth/sveltekit/components';
	import { page } from '$app/stores';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<input type="text" placeholder="Search" class="input input-bordered text-xl" />
	</div>
	<div class="navbar-center">
		<div role="tablist" class="tabs tabs-bordered">
			<a role="tab" href="/gov" class="tab">Governments</a>
			<a role="tab" href="/org"  class="tab tab-active">Organisations</a>
			<a role="tab" href="/com"  class="tab">Corporations</a>
		</div>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<label for="my-drawer" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					{#if $page.data.session}
						{#if $page.data.session.user?.image}
							<span
								style="background-image: url('{$page.data.session.user.image}')"
								class="avatar"
							/>
						{:else}
							<img alt="profilepic" src="/images/stock/photo.jpg" />
						{/if}
					{/if}
				</div>
			</label>
		</div>
	</div>
</div>

<div class="drawer drawer-end">

	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay"></label>

		<div class="min-h-screen bg-base-100">
			<h1>SvelteKit Auth Example</h1>
			<p>
				{#if $page.data.session}
					{#if $page.data.session.user?.image}
						<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
					{/if}
					<span class="signedInText">
						<small>Signed in as</small><br />
						<strong>{$page.data.session.user?.name ?? 'User'}</strong>
					</span>
					<SignOut />
				{:else}
					<span class="notSignedInText">You are not signed in</span>
					<SignIn provider="github" />
					<SignIn provider="google" />
					<SignIn provider="facebook" />
				{/if}
			</p>
		</div>
	</div>
</div>

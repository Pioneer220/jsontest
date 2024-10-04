const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Fade,
		C3.Behaviors.Sin,
		C3.Plugins.Arr,
		C3.Behaviors.Tween,
		C3.Plugins.Particles,
		C3.Behaviors.Pathfinding,
		C3.Plugins.Text,
		C3.Behaviors.Platform,
		C3.Plugins.Spritefont2,
		C3.Plugins.TiledBg,
		C3.Behaviors.shadowcaster,
		C3.Plugins.Touch,
		C3.Plugins.LocalStorage,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.Json,
		C3.Plugins.AJAX,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.Fade.Acts.SetWaitTime,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Acts.SetMaxFallSpeed,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Arr.Exps.Width,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Acts.RotateCounterclockwise,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Particles.Acts.SetInitSize,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Json.Acts.SetValue,
		C3.Plugins.AJAX.Acts.Post,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.LocalStorage.Cnds.OnItemMissing,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Text.Exps.X,
		C3.Plugins.Text.Exps.Y
	];
};
self.C3_JsPropNameTable = [
	{Fade: 0},
	{Sine: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{background: 0},
	{MarginWall: 0},
	{Array: 0},
	{BGEffect: 0},
	{ExplosionAdditive: 0},
	{ExplosionScreen: 0},
	{Coin: 0},
	{Tween: 0},
	{Obstacle_blue: 0},
	{Obstacle_pink: 0},
	{Obstacle_red: 0},
	{Pathfinding: 0},
	{Particles: 0},
	{Particles2: 0},
	{Particles23: 0},
	{Particles3: 0},
	{TextScore: 0},
	{Platform: 0},
	{Player: 0},
	{score: 0},
	{Menu: 0},
	{Link_ID: 0},
	{Orig_Width: 0},
	{Orig_Height: 0},
	{Menu_Panel: 0},
	{Particles22: 0},
	{Type: 0},
	{Orig_Scale: 0},
	{SpriteFont_Green: 0},
	{SpriteFont_White: 0},
	{SpriteFont_Yellow: 0},
	{ShadowCaster: 0},
	{TiledBackground6: 0},
	{Sprite10: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{Hamie: 0},
	{TextLoading: 0},
	{Score1: 0},
	{Sprite20: 0},
	{Sprite21: 0},
	{Sprite22: 0},
	{Sprite23: 0},
	{Sprite24: 0},
	{Sprite25: 0},
	{Sprite26: 0},
	{Sprite27: 0},
	{TiledBackground8: 0},
	{Restart: 0},
	{Sprite28: 0},
	{Sprite17: 0},
	{Home: 0},
	{Sprite3: 0},
	{TextBest: 0},
	{stars: 0},
	{Start: 0},
	{Touch: 0},
	{LocalStorage: 0},
	{Audio: 0},
	{Browser: 0},
	{JSON: 0},
	{AJAX: 0},
	{SpriteFonts: 0},
	{var_state: 0},
	{var_score: 0},
	{var_best: 0},
	{isLightning: 0},
	{Selectedcolor: 0}
];

self.InstanceType = {
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	background: class extends self.ISpriteInstance {},
	MarginWall: class extends self.ISpriteInstance {},
	Array: class extends self.IArrayInstance {},
	BGEffect: class extends self.ISpriteInstance {},
	ExplosionAdditive: class extends self.ISpriteInstance {},
	ExplosionScreen: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	Obstacle_blue: class extends self.ISpriteInstance {},
	Obstacle_pink: class extends self.ISpriteInstance {},
	Obstacle_red: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	Particles2: class extends self.IParticlesInstance {},
	Particles23: class extends self.IParticlesInstance {},
	Particles3: class extends self.IParticlesInstance {},
	TextScore: class extends self.ITextInstance {},
	Player: class extends self.ISpriteInstance {},
	score: class extends self.ISpriteInstance {},
	Menu_Panel: class extends self.ISpriteInstance {},
	Particles22: class extends self.IParticlesInstance {},
	SpriteFont_Green: class extends self.ISpriteFontInstance {},
	SpriteFont_White: class extends self.ISpriteFontInstance {},
	SpriteFont_Yellow: class extends self.ISpriteFontInstance {},
	TiledBackground6: class extends self.ITiledBackgroundInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Hamie: class extends self.ISpriteInstance {},
	TextLoading: class extends self.ITextInstance {},
	Score1: class extends self.ITextInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	Sprite22: class extends self.ISpriteInstance {},
	Sprite23: class extends self.ISpriteInstance {},
	Sprite24: class extends self.ISpriteInstance {},
	Sprite25: class extends self.ISpriteInstance {},
	Sprite26: class extends self.ISpriteInstance {},
	Sprite27: class extends self.ISpriteInstance {},
	TiledBackground8: class extends self.ITiledBackgroundInstance {},
	Restart: class extends self.ISpriteInstance {},
	Sprite28: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Home: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	TextBest: class extends self.ITextInstance {},
	stars: class extends self.ISpriteInstance {},
	Start: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	JSON: class extends self.IJSONInstance {},
	AJAX: class extends self.IInstance {},
	SpriteFonts: class extends self.ISpriteFontInstance {}
}
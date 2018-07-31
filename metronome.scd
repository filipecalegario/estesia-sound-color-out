m= NetAddr("127.0.0.1", 9000);

(
var clock= TempoClock(220/60);  //bpm
clock.sched(0, {
	clock.beatsPerBar= 6;  //maxBeat (beats per bar)
	m.sendMsg(\configure, 100, clock.beatsPerBar);  //20 is total number of bars
	clock.sched(clock.nextTimeOnGrid, {
		[clock.bar, clock.beatInBar.asInteger].postln;
			m.sendMsg(\metro, clock.bar, clock.beatInBar.asInteger);
			1;
		});
		nil;
});
)
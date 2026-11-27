(()=>{const l={lens:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22"/>',activity:'<path d="M22 12h-4l-3 7-6-14-3 7H2"/>',barChart:'<path d="M4 20h16"/><path d="M7 20v-7"/><path d="M12 20V6"/><path d="M17 20v-10"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',sliders:'<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="2" fill="var(--bg)"/><circle cx="15" cy="12" r="2" fill="var(--bg)"/><circle cx="11" cy="17" r="2" fill="var(--bg)"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4"/>',layers:'<path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>',dollar:'<path d="M12 2v20"/><path d="M16.5 6.5c0-1.66-2.01-3-4.5-3s-4.5 1.34-4.5 3 2.01 3 4.5 3 4.5 1.34 4.5 3-2.01 3-4.5 3-4.5-1.34-4.5-3"/>',cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="0.5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',chevronRight:'<path d="m9 6 6 6-6 6"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',terminal:'<path d="m5 7 5 5-5 5"/><path d="M12 17h7"/>',fileText:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>',gitBranch:'<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M6 8.5v7"/><path d="M18 10.5c0 4-3 5-12 5"/>',box:'<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M12 12 20 7.5M12 12v9M12 12 4 7.5"/>',download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/>',copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',check:'<path d="m5 12 5 5L20 7"/>',arrowUpRight:'<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',alert:'<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 2.3 18a2 2 0 0 0 1.7 3h16a2 2 0 0 0 1.7-3l-8-14.1a2 2 0 0 0-3.4 0Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/>',rotateCcw:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',trendingUp:'<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',pieChart:'<path d="M21 12A9 9 0 1 1 12 3v9Z"/><path d="M21.2 9A9 9 0 0 0 15 2.8V9Z"/>',arrowLeft:'<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'};function v(O,T=14,pt=""){const at=l[O]||l.box;return`<svg class="ic ${pt}" width="${T}" height="${T}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${at}</svg>`}window.AgyLensIcons={iconSvg:v}})(),(()=>{function l(p){return String(p??"").replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;")}function v(p){if(p==null||!Number.isFinite(p))return"\u2014";const u=Math.abs(p);return u>=1e9?`${(p/1e9).toFixed(2)}B`:u>=1e6?`${(p/1e6).toFixed(2)}M`:u>=1e3?`${(p/1e3).toFixed(1)}k`:String(Math.round(p))}function O(p){return p==null||!Number.isFinite(p)?"\u2014":p===0?"$0.00":p<.01?`$${p.toFixed(4)}`:p<10?`$${p.toFixed(3)}`:`$${p.toFixed(2)}`}function T(p){if(p==null||!Number.isFinite(p))return"\u2014";if(p<1e3)return`${Math.round(p)}ms`;const u=p/1e3;if(u<60)return`${u.toFixed(1)}s`;const k=Math.floor(u/60),b=Math.round(u%60);return`${k}m ${b}s`}const pt=["var(--accent)","var(--seg-cache)","var(--warn)","#8b5cf6","var(--seg-output)"];function at(p){return pt[p%pt.length]}function bt(p=[]){const u=new Map;for(const n of p)n?.date&&u.set(n.date,n);const k=new Date;k.setHours(0,0,0,0);const b=new Date(k);b.setDate(b.getDate()+(6-b.getDay()));const w=371,C=new Date(b);C.setDate(b.getDate()-w+1);const h=[],i=Math.max(...p.map(n=>n.tokens||0),1);for(let n=0;n<w;n++){const d=new Date(C);d.setDate(C.getDate()+n);const f=Math.floor(n/7),E=n%7,D=d.getFullYear(),Q=String(d.getMonth()+1).padStart(2,"0"),N=String(d.getDate()).padStart(2,"0"),F=`${D}-${Q}-${N}`,H=d.getTime()>k.getTime(),A=u.get(F);let J=0;if(!H&&A&&A.tokens>0){const s=Math.sqrt(A.tokens/i);J=s>.72?4:s>.45?3:s>.2?2:1}const t=A?`${F} \xB7 ${v(A.tokens)} tok \xB7 ${A.requests} req \xB7 ${O(A.costUsd)}${A.errors?` \xB7 ${A.errors} err`:""}`:`${F} \xB7 0 tok`;h.push({col:f,row:E,level:J,isFuture:H,tip:t,date:F,isFirstOfMonth:d.getDate()===1})}const B=16,S=13,m=5.4,L=m+1.4,R=B+53*L+2,q=S+7*L+2,_=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=[];let U=-4;for(const n of h)if(n.isFirstOfMonth&&!n.isFuture&&n.col-U>=3){U=n.col;const d=Number(n.date.slice(5,7))-1;x.push(`<text class="chart-axis" x="${(B+n.col*L).toFixed(1)}" y="9">${_[d]||""}</text>`)}const Z=[[1,"M"],[3,"W"],[5,"F"]].map(([n,d])=>`<text class="chart-axis" x="11" y="${(S+n*L+m-.8).toFixed(1)}" text-anchor="end">${d}</text>`).join(""),g=h.map(n=>{if(n.isFuture)return"";const d=B+n.col*L,f=S+n.row*L;return`<rect class="hm-cell hm-l${n.level}" x="${d.toFixed(1)}" y="${f.toFixed(1)}" width="${m}" height="${m}" rx="1.2" data-tip="${l(n.tip)}"/>`}).join("");return`
      <svg class="chart-svg" viewBox="0 0 ${R.toFixed(1)} ${q.toFixed(1)}" role="img" aria-label="53-week activity heatmap">
        ${x.join("")}${Z}${g}
      </svg>
      <div class="hm-foot">
        <span class="hm-scale">
          <i class="hm-swatch hm-l0"></i>
          <i class="hm-swatch hm-l1"></i>
          <i class="hm-swatch hm-l2"></i>
          <i class="hm-swatch hm-l3"></i>
          <i class="hm-swatch hm-l4"></i>
        </span>
      </div>
    `}function xt(p,u="tokens"){if(!Array.isArray(p)||!p.length)return"";const k=520,b=148,w=44,C=10,h=12,i=22,B=k-w-C,S=b-h-i,m=p.slice(-21),I=m.length<=7?1:m.length<=14?2:3;if(u==="cache"){const n=m.map((F,H)=>{const A=(F.inputTokens||0)+(F.cacheReadTokens||0),J=A>0?Number(((F.cacheReadTokens||0)/A*100).toFixed(1)):0,t=m.length===1?w+B/2:w+H/(m.length-1)*B,s=h+S*(1-Math.min(100,J)/100);return{d:F,pct:J,x:t,y:s,idx:H}}),d=[0,50,100].map(F=>{const H=h+S*(1-F/100);return`
          <line class="chart-grid" x1="${w}" y1="${H.toFixed(1)}" x2="${k-C}" y2="${H.toFixed(1)}"/>
          <text class="chart-axis" x="${w-6}" y="${(H+3).toFixed(1)}" text-anchor="end">${F}%</text>
        `}).join(""),f=h+S*(1-.7),E=`<line class="chart-ref" x1="${w}" y1="${f.toFixed(1)}" x2="${k-C}" y2="${f.toFixed(1)}"/>`,D=n.map((F,H)=>`${H===0?"M":"L"}${F.x.toFixed(1)},${F.y.toFixed(1)}`).join(" "),Q=n.length>1?`${D} L${n[n.length-1].x.toFixed(1)},${(h+S).toFixed(1)} L${n[0].x.toFixed(1)},${(h+S).toFixed(1)} Z`:"",N=n.map(F=>{const H=F.idx%I===0||F.idx===n.length-1,A=`${F.d.date} \xB7 Cache ${F.pct}% \xB7 Read ${v(F.d.cacheReadTokens)} \xB7 In ${v(F.d.inputTokens)}`;return`
          <circle class="chart-dot chart-dot-ok" cx="${F.x.toFixed(1)}" cy="${F.y.toFixed(1)}" r="3.2" data-tip="${l(A)}"/>
          ${H?`<text class="chart-axis" x="${F.x.toFixed(1)}" y="${b-5}" text-anchor="middle">${F.d.date.slice(5)}</text>`:""}
        `}).join("");return`
        <svg class="chart-svg" viewBox="0 0 ${k} ${b}" role="img" aria-label="Daily cache hit trend">
          ${d}${E}
          ${Q?`<path class="chart-area chart-area-ok" d="${Q}"/>`:""}
          ${n.length>1?`<path class="chart-line chart-line-ok" d="${D}"/>`:""}
          ${N}
        </svg>
      `}const L=n=>u==="cost"?n.costUsd||0:u==="requests"?n.requests||0:n.tokens||0,R=n=>u==="cost"?O(n):u==="requests"?String(Math.round(n)):v(n),q=Math.max(...m.map(L),u==="cost"?.01:1),_=B/m.length,x=Math.max(5,Math.min(28,_*.64)),U=[0,.5,1].map(n=>{const d=h+S*(1-n);return`
        <line class="chart-grid" x1="${w}" y1="${d.toFixed(1)}" x2="${k-C}" y2="${d.toFixed(1)}"/>
        <text class="chart-axis" x="${w-6}" y="${(d+3).toFixed(1)}" text-anchor="end">${R(q*n)}</text>
      `}).join(""),Z=m.map((n,d)=>{const f=w+d*_+(_-x)/2,D=d%I===0||d===m.length-1?`<text class="chart-axis" x="${(f+x/2).toFixed(1)}" y="${b-5}" text-anchor="middle">${n.date.slice(5)}</text>`:"",Q=`${n.date} \xB7 ${v(n.tokens)} tok (Cache ${v(n.cacheReadTokens)} \xB7 In ${v(n.inputTokens)} \xB7 Out ${v(n.outputTokens)}) \xB7 ${n.requests} req \xB7 ${O(n.costUsd)}${n.errors?` \xB7 ${n.errors} err`:""}`;if(u==="tokens"){const J=n.tokens||0,t=Math.max(J>0?2:0,J/q*S);if(!t)return D;const s=J>0?t*((n.cacheReadTokens||0)/J):0,a=J>0?t*((n.inputTokens||0)/J):0,c=Math.max(0,t-s-a),y=h+S-s,P=y-a,tt=P-c;return`
          <g class="chart-bar-group" data-tip="${l(Q)}">
            ${s>0?`<rect class="seg-fill-cache" x="${f.toFixed(1)}" y="${y.toFixed(1)}" width="${x.toFixed(1)}" height="${s.toFixed(1)}"/>`:""}
            ${a>0?`<rect class="seg-fill-input" x="${f.toFixed(1)}" y="${P.toFixed(1)}" width="${x.toFixed(1)}" height="${a.toFixed(1)}"/>`:""}
            ${c>0?`<rect class="seg-fill-output" x="${f.toFixed(1)}" y="${tt.toFixed(1)}" width="${x.toFixed(1)}" height="${c.toFixed(1)}" rx="1.5"/>`:""}
          </g>
          ${D}
        `}const N=L(n),F=Math.max(N>0?2:0,N/q*S),H=h+S-F,A=u==="requests"&&n.errors>0?`<circle class="chart-dot-err" cx="${(f+x/2).toFixed(1)}" cy="${Math.max(h+3,H-4).toFixed(1)}" r="2.5"/>`:"";return`
        <rect class="chart-bar" x="${f.toFixed(1)}" y="${H.toFixed(1)}" width="${x.toFixed(1)}" height="${F.toFixed(1)}" rx="2" data-tip="${l(Q)}"/>
        ${A}
        ${D}
      `}).join("");return`<svg class="chart-svg" viewBox="0 0 ${k} ${b}" role="img" aria-label="Daily usage chart">${U}${Z}</svg>${u==="tokens"?'<div class="chart-legend"><span class="legend-item"><i class="dot dot-cache"></i>Cache</span><span class="legend-item"><i class="dot dot-input"></i>Input</span><span class="legend-item"><i class="dot dot-output"></i>Output</span></div>':""}`}function vt({centerVal:p,centerSub:u,segments:k}){const h=2*Math.PI*34,i=k.reduce((m,I)=>m+Math.max(0,I.value||0),0);let B=0;const S=i>0?k.filter(m=>m.value>0).map(m=>{const L=m.value/i*h,R=m.color?`stroke:${m.color};`:"",q=`<circle class="donut-seg ${m.cls||""}" style="${R}" cx="44" cy="44" r="34" stroke-dasharray="${L.toFixed(2)} ${(h-L).toFixed(2)}" stroke-dashoffset="${(-B).toFixed(2)}" data-tip="${l(m.tip)}"/>`;return B+=L,q}).join(""):"";return`
      <svg class="donut-svg" width="88" height="88" viewBox="0 0 88 88" role="img" aria-label="${l(u)}">
        <circle class="donut-track" cx="44" cy="44" r="34"/>
        <g transform="rotate(-90 44 44)">${S}</g>
        <text class="donut-center-val" x="44" y="45" text-anchor="middle">${l(p)}</text>
        <text class="donut-center-sub" x="44" y="57" text-anchor="middle">${l(u)}</text>
      </svg>
    `}function yt(p=[],u={}){if(!p.length&&!(u.totalTokens>0))return"";const k=p.slice(0,5),b=p.slice(5).reduce((R,q)=>R+(q.tokens||0),0),w=p.slice(5).reduce((R,q)=>R+(q.costUsd||0),0),C=k.map((R,q)=>({value:R.tokens||0,color:at(q),tip:`${R.model}: ${v(R.tokens)} (${R.sharePercent}%)`}));b>0&&C.push({value:b,color:"var(--line-strong)",tip:`Other: ${v(b)}`});const h=k.map((R,q)=>({value:R.costUsd||0,color:at(q),tip:`${R.model}: ${O(R.costUsd)} (${R.costSharePercent||0}%)`}));w>0&&h.push({value:w,color:"var(--line-strong)",tip:`Other: ${O(w)}`});const i=(u.costUsd||0)>0,B=u.cacheReadTokens||0,S=u.inputTokens||0,m=u.outputTokens||0,I=B+S+m,L=I>0?`
      <div class="mix-strip">
        <div class="stack-bar" role="img" aria-label="Token mix">
          ${B>0?`<div class="stack-seg seg-fill-cache" style="width:${(B/I*100).toFixed(2)}%" data-tip="Cache ${v(B)}"></div>`:""}
          ${S>0?`<div class="stack-seg seg-fill-input" style="width:${(S/I*100).toFixed(2)}%" data-tip="Input ${v(S)}"></div>`:""}
          ${m>0?`<div class="stack-seg seg-fill-output" style="width:${(m/I*100).toFixed(2)}%" data-tip="Output ${v(m)}"></div>`:""}
        </div>
        <div class="chart-legend">
          <span class="legend-item"><i class="dot dot-cache"></i>Cache ${v(B)} (${(B/I*100).toFixed(0)}%)</span>
          <span class="legend-item"><i class="dot dot-input"></i>In ${v(S)}</span>
          <span class="legend-item"><i class="dot dot-output"></i>Out ${v(m)}</span>
          ${u.thinkingTokens>0?`<span class="legend-item">Think ${v(u.thinkingTokens)}</span>`:""}
        </div>
      </div>
    `:"";return`
      <div class="dual-donut-wrap">
        <div class="dual-donuts ${i?"":"single"}">
          <div class="donut-box">
            ${vt({centerVal:v(u.totalTokens),centerSub:"Token",segments:C})}
          </div>
          ${i?`
            <div class="donut-box">
              ${vt({centerVal:O(u.costUsd),centerSub:"USD",segments:h})}
            </div>
          `:""}
        </div>
        ${L}
      </div>
    `}function ft(p,u=1e6,k=80){if(!Array.isArray(p)||p.length<2)return"";const b=520,w=132,C=44,h=10,i=12,B=20,S=b-C-h,m=w-i-B,I=Math.max(...p.map(d=>d.usedTokens||0),1),L=u>0?u*(k/100):0,R=u>0&&I>=u*.55?u:Math.max(I*1.18,1e3),q=[0,.5,1].map(d=>{const f=i+m*(1-d);return`
        <line class="chart-grid" x1="${C}" y1="${f.toFixed(1)}" x2="${b-h}" y2="${f.toFixed(1)}"/>
        <text class="chart-axis" x="${C-6}" y="${(f+3).toFixed(1)}" text-anchor="end">${v(R*d)}</text>
      `}).join(""),_=L>0&&L<=R?`<line class="chart-ref chart-ref-warn" x1="${C}" y1="${(i+m*(1-L/R)).toFixed(1)}" x2="${b-h}" y2="${(i+m*(1-L/R)).toFixed(1)}"/>`:"",x=p.map((d,f)=>{const E=C+f/(p.length-1)*S,D=i+m*(1-Math.min(1,(d.usedTokens||0)/R));return{s:d,x:E,y:D,i:f}}),U=x.map((d,f)=>`${f===0?"M":"L"}${d.x.toFixed(1)},${d.y.toFixed(1)}`).join(" "),Z=`${U} L${x[x.length-1].x.toFixed(1)},${(i+m).toFixed(1)} L${x[0].x.toFixed(1)},${(i+m).toFixed(1)} Z`,g=Math.max(1,Math.ceil(x.length/6)),n=x.map(d=>{const f=u>0?` (${(d.s.usedTokens/u*100).toFixed(1)}%)`:"",E=`Req #${d.s.idx} \xB7 ${v(d.s.usedTokens)}${f}${d.s.cacheHitPercent!=null?` \xB7 Cache ${d.s.cacheHitPercent}%`:""}`,D=d.i===0||d.i===x.length-1||d.i%g===0;return`
        <circle class="chart-dot ${d.s.error?"chart-dot-err":""}" cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="${x.length>25?2.4:3}" data-tip="${l(E)}"/>
        ${D?`<text class="chart-axis" x="${d.x.toFixed(1)}" y="${w-4}" text-anchor="middle">#${d.s.idx}</text>`:""}
      `}).join("");return`
      <svg class="chart-svg" viewBox="0 0 ${b} ${w}" role="img" aria-label="Session context trend">
        ${q}${_}
        <path class="chart-area" d="${Z}"/>
        <path class="chart-line" d="${U}"/>
        ${n}
      </svg>
    `}function kt(p){if(!Array.isArray(p)||!p.length)return"";const u=p.slice(-24),k=520,b=132,w=44,C=10,h=12,i=20,B=k-w-C,S=b-h-i,m=Math.max(...u.map(x=>x.totalTokens||0),1),I=B/u.length,L=Math.max(5,Math.min(28,I*.64)),R=u.length<=10?1:u.length<=18?2:3,q=[0,.5,1].map(x=>{const U=h+S*(1-x);return`
        <line class="chart-grid" x1="${w}" y1="${U.toFixed(1)}" x2="${k-C}" y2="${U.toFixed(1)}"/>
        <text class="chart-axis" x="${w-6}" y="${(U+3).toFixed(1)}" text-anchor="end">${v(m*x)}</text>
      `}).join(""),_=u.map((x,U)=>{const Z=w+U*I+(I-L)/2,g=x.totalTokens||0,n=Math.max(g>0?2:0,g/m*S),f=U%R===0||U===u.length-1?`<text class="chart-axis" x="${(Z+L/2).toFixed(1)}" y="${b-4}" text-anchor="middle">#${x.turnNumber}</text>`:"";if(!n)return f;const E=n*((x.cacheReadTokens||0)/g),D=n*((x.inputTokens||0)/g),Q=Math.max(0,n-E-D),N=h+S,F=`Turn #${x.turnNumber} \xB7 ${v(g)} tok (Cache ${v(x.cacheReadTokens)} \xB7 In ${v(x.inputTokens)} \xB7 Out ${v(x.outputTokens)})${x.costUsd!=null?` \xB7 ${O(x.costUsd)}`:""}`;return`
        <g class="chart-bar-group" data-tip="${l(F)}">
          ${E>0?`<rect class="seg-fill-cache" x="${Z.toFixed(1)}" y="${(N-E).toFixed(1)}" width="${L.toFixed(1)}" height="${E.toFixed(1)}"/>`:""}
          ${D>0?`<rect class="seg-fill-input" x="${Z.toFixed(1)}" y="${(N-E-D).toFixed(1)}" width="${L.toFixed(1)}" height="${D.toFixed(1)}"/>`:""}
          ${Q>0?`<rect class="seg-fill-output" x="${Z.toFixed(1)}" y="${(N-E-D-Q).toFixed(1)}" width="${L.toFixed(1)}" height="${Q.toFixed(1)}" rx="1.5"/>`:""}
        </g>
        ${f}
      `}).join("");return`
      <svg class="chart-svg" viewBox="0 0 ${k} ${b}" role="img" aria-label="Per-turn token chart">${q}${_}</svg>
      <div class="chart-legend"><span class="legend-item"><i class="dot dot-cache"></i>Cache</span><span class="legend-item"><i class="dot dot-input"></i>Input</span><span class="legend-item"><i class="dot dot-output"></i>Output</span></div>
    `}function wt(p){const u=(p||[]).filter(n=>Number.isFinite(n.tps)&&n.tps>0);if(u.length<2)return"";const k=520,b=132,w=44,C=10,h=12,i=20,B=k-w-C,S=b-h-i,m=Math.max(...u.map(n=>n.tps),10),I=u.reduce((n,d)=>n+d.tps,0)/u.length,L=m*1.15,R=[0,.5,1].map(n=>{const d=h+S*(1-n);return`
        <line class="chart-grid" x1="${w}" y1="${d.toFixed(1)}" x2="${k-C}" y2="${d.toFixed(1)}"/>
        <text class="chart-axis" x="${w-6}" y="${(d+3).toFixed(1)}" text-anchor="end">${Math.round(L*n)}</text>
      `}).join(""),q=h+S*(1-I/L),_=`<line class="chart-ref" x1="${w}" y1="${q.toFixed(1)}" x2="${k-C}" y2="${q.toFixed(1)}"/>`,x=u.map((n,d)=>({s:n,i:d,x:w+d/(u.length-1)*B,y:h+S*(1-n.tps/L)})),U=x.map((n,d)=>`${d===0?"M":"L"}${n.x.toFixed(1)},${n.y.toFixed(1)}`).join(" "),Z=Math.max(1,Math.ceil(x.length/6)),g=x.map(n=>{const d=`Req #${n.s.idx} \xB7 ${n.s.tps} t/s${n.s.ttftMs!=null?` \xB7 TTFT ${T(n.s.ttftMs)}`:""} \xB7 Out ${v(n.s.outputTokens)}`,f=n.i===0||n.i===x.length-1||n.i%Z===0;return`
        <circle class="chart-dot chart-dot-ok" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${x.length>25?2.4:3}" data-tip="${l(d)}"/>
        ${f?`<text class="chart-axis" x="${n.x.toFixed(1)}" y="${b-4}" text-anchor="middle">#${n.s.idx}</text>`:""}
      `}).join("");return`
      <svg class="chart-svg" viewBox="0 0 ${k} ${b}" role="img" aria-label="Session speed trend">
        ${R}${_}
        <path class="chart-line chart-line-ok" d="${U}"/>
        ${g}
      </svg>
    `}function e(p){return!Array.isArray(p)||!p.length?"":`<div class="stack-bar" role="img" aria-label="Model share">${p.slice(0,5).map((b,w)=>{const C=at(w),h=`${b.model}: ${b.sharePercent}% (${v(b.tokens)})`;return`<div class="stack-seg" style="width:${Math.max(1,b.sharePercent)}%;background:${C}" data-tip="${l(h)}"></div>`}).join("")}</div>`}window.AgyLensCharts={fmtTokens:v,fmtCost:O,fmtDuration:T,modelShade:at,renderHeatmapChart:bt,renderDailyBarChart:xt,renderModelDonuts:yt,renderSessionContextChart:ft,renderSessionTurnsChart:kt,renderSessionSpeedChart:wt,renderModelStackBar:e}})(),(()=>{const{iconSvg:l}=window.AgyLensIcons,{fmtCost:v,fmtDuration:O,fmtTokens:T,modelShade:pt,renderHeatmapChart:at,renderDailyBarChart:bt,renderModelDonuts:xt,renderSessionContextChart:vt,renderSessionSpeedChart:yt,renderSessionTurnsChart:ft,renderModelStackBar:kt}=window.AgyLensCharts,wt={vi:{tabs:{session:"Phi\xEAn",usage:"T\u1ED5ng quan",search:"T\xECm ki\u1EBFm",config:"Xu\u1EA5t & Gi\xE1"},context:"Ng\u1EEF c\u1EA3nh",breakdown:"Chi ti\u1EBFt",checkpoints:"N\xE9n",cacheHit:"Cache Hit",cacheWarm:"Cache",cacheExpired:"H\u1EBFt TTL",speed:"T\u1ED1c \u0111\u1ED9",tokens:"Token",cost:"Chi ph\xED",turns:"L\u01B0\u1EE3t h\u1ED9i tho\u1EA1i",sessionTrend:"Bi\u1EC3u \u0111\u1ED3 phi\xEAn",chartCtx:"Ng\u1EEF c\u1EA3nh",chartTurns:"L\u01B0\u1EE3t",chartSpeed:"T\u1ED1c \u0111\u1ED9",tokenMix:"Ph\xE2n b\u1ED5 Token & Chi ph\xED",heatmap:"Ho\u1EA1t \u0111\u1ED9ng 53 tu\u1EA7n",toolBurn:"Ti\xEAu hao theo Tool",topSessions:"Top phi\xEAn t\u1ED1n nh\u1EA5t",budgetTitle:"Ng\xE2n s\xE1ch",budgetDaily:"H\xF4m nay",budgetWeekly:"7 ng\xE0y",dailyBudget:"Ng\xE2n s\xE1ch ng\xE0y ($)",weeklyBudget:"Ng\xE2n s\xE1ch tu\u1EA7n ($)",overhead:"N\u1EC1n",chatLbl:"Chat",perTurn:"/l\u01B0\u1EE3t",turnsLeft:"l\u01B0\u1EE3t",toolCats:{cmd:"L\u1EC7nh",read:"\u0110\u1ECDc file",edit:"S\u1EEDa file",search:"T\xECm ki\u1EBFm",subagent:"Subagent",other:"Kh\xE1c"},subagents:"Subagents",combined:"G\u1ED9p",backParent:"Phi\xEAn g\u1ED1c",noSession:"Ch\u01B0a c\xF3 phi\xEAn n\xE0o",noTools:"Kh\xF4ng g\u1ECDi tool",ranges:{"5h":"5h",today:"H\xF4m nay","24h":"24h","7d":"7N","30d":"30N",all:"T\u1EA5t c\u1EA3"},allModels:"M\u1ECDi model",allConvs:"M\u1ECDi phi\xEAn",requests:"Request",daily:"Theo ng\xE0y",byModel:"Theo Model",recentLog:"Nh\u1EADt k\xFD Request",logSearchPlaceholder:"L\u1ECDc model, phi\xEAn, l\u1ED7i\u2026",filterAll:"T\u1EA5t c\u1EA3",filterErr:"L\u1ED7i",filterDrop:"T\u1EE5t cache",colModel:"Model",colReq:"Req",colTokens:"Token",colCache:"Cache",colCost:"Chi ph\xED",colTime:"L\xFAc",searchPlaceholder:"T\xECm prompt, code, l\u1EC7nh\u2026",scopes:{all:"T\u1EA5t c\u1EA3",text:"N\u1ED9i dung",code:"Code",cmd:"L\u1EC7nh"},open:"M\u1EDF",copied:"\u0110\xE3 ch\xE9p",noResults:"Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3",searchPrompt:"Nh\u1EADp t\u1ED1i thi\u1EC3u 2 k\xFD t\u1EF1",exportTitle:"Xu\u1EA5t & T\xE1ch phi\xEAn",exportAll:"To\xE0n b\u1ED9 l\u01B0\u1EE3t",exportUntil:"\u0110\u1EBFn l\u01B0\u1EE3t",exportMd:"Markdown",exportJsonl:"JSONL",exportFork:"Ch\xE9p Fork",ratesTitle:"\u0110\u01A1n gi\xE1 ($ / 1M token)",pricingMode:"Ch\u1EBF \u0111\u1ED9 gi\xE1",modeStandard:"Chu\u1EA9n",modePromo:"\u01AFu \u0111\xE3i",syncRates:"\u0110\u1ED3ng b\u1ED9 gi\xE1",saveRates:"L\u01B0u gi\xE1",resetAll:"M\u1EB7c \u0111\u1ECBnh",saved:"\u0110\xE3 l\u01B0u",prefsTitle:"T\xF9y ch\u1ECDn",language:"Ng\xF4n ng\u1EEF",warnAt:"C\u1EA3nh b\xE1o ng\u1EEF c\u1EA3nh",ctxLimit:"Gi\u1EDBi h\u1EA1n ng\u1EEF c\u1EA3nh",auto:"T\u1EF1 \u0111\u1ED9ng (DB)",retry:"Th\u1EED l\u1EA1i",errors:"l\u1ED7i",kinds:{prompt:"Prompt",reply:"Tr\u1EA3 l\u1EDDi",code:"Code",cmd:"L\u1EC7nh"}},en:{tabs:{session:"Session",usage:"Usage",search:"Search",config:"Export & Rates"},context:"Context",breakdown:"Breakdown",checkpoints:"Compactions",cacheHit:"Cache Hit",cacheWarm:"Cache",cacheExpired:"TTL expired",speed:"Speed",tokens:"Tokens",cost:"Est. Cost",turns:"Turns",sessionTrend:"Session Charts",chartCtx:"Context",chartTurns:"Turns",chartSpeed:"Speed",tokenMix:"Token & Cost Split",heatmap:"53-Week Activity",toolBurn:"Tool Consumption",topSessions:"Top Sessions",budgetTitle:"Budget",budgetDaily:"Today",budgetWeekly:"7D",dailyBudget:"Daily Budget ($)",weeklyBudget:"Weekly Budget ($)",overhead:"Base",chatLbl:"Chat",perTurn:"/turn",turnsLeft:"turns",toolCats:{cmd:"Command",read:"Read",edit:"Edit",search:"Search",subagent:"Subagent",other:"Other"},subagents:"Subagents",combined:"Total",backParent:"Parent",noSession:"No conversations yet",noTools:"No tool calls",ranges:{"5h":"5h",today:"Today","24h":"24h","7d":"7D","30d":"30D",all:"All"},allModels:"All models",allConvs:"All sessions",requests:"Requests",daily:"Daily",byModel:"By Model",recentLog:"Request Events",logSearchPlaceholder:"Filter model, session, error\u2026",filterAll:"All",filterErr:"Errors",filterDrop:"Cache Drop",colModel:"Model",colReq:"Req",colTokens:"Tokens",colCache:"Cache",colCost:"Cost",colTime:"Time",searchPlaceholder:"Search prompts, code, commands\u2026",scopes:{all:"All",text:"Text",code:"Code",cmd:"Cmd"},open:"Open",copied:"Copied",noResults:"No matching results",searchPrompt:"Enter at least 2 characters",exportTitle:"Export & Fork Session",exportAll:"All turns",exportUntil:"Up to turn",exportMd:"Markdown",exportJsonl:"JSONL",exportFork:"Copy Fork",ratesTitle:"Rates ($ / 1M tokens)",pricingMode:"Pricing Mode",modeStandard:"Standard",modePromo:"Promo",syncRates:"Sync Rates",saveRates:"Save Rates",resetAll:"Reset",saved:"Saved",prefsTitle:"Preferences",language:"Language",warnAt:"Context Warning",ctxLimit:"Context Limit",auto:"Auto (DB)",retry:"Retry",errors:"err",kinds:{prompt:"Prompt",reply:"Reply",code:"Code",cmd:"Cmd"}}},e={tab:"session",settings:{language:"vi",pricingMode:"standard",contextWarnPercent:80,contextLimitOverride:1e6,dailyBudgetUsd:0,weeklyBudgetUsd:0,customRates:{}},catalog:[],pricingMeta:{syncedAt:null,status:"builtin"},syncingRates:!1,selectedConvId:window.sidecar?.conversationId||"",parentConvId:"",session:null,sessionRev:0,sessionLoading:!0,sessionChart:"context",pickerOpen:!1,pendingRender:!1,ctxExpanded:(()=>{try{return localStorage.getItem("agy_lens_ctx_expanded")!=="0"}catch{return!0}})(),openCats:new Set,openTurns:new Set,usage:null,usageLoading:!1,usageRange:"7d",usageModel:"",usageConv:"",logQuery:"",usageMetric:"tokens",logFilter:"all",searchQuery:"",searchScope:"all",searchData:null,searchLoading:!1,exportTurn:"",error:"",statusBadge:""};let p=0,u=[];const k=document.getElementById("content"),b=document.getElementById("btn-refresh"),w=document.getElementById("btn-theme"),C=document.getElementById("chart-tooltip");function h(){return wt[e.settings.language==="en"?"en":"vi"]}function i(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function B(t){if(!Number.isFinite(t))return"\u2014";const s=Math.max(0,Math.floor((Date.now()-t)/1e3));return s<60?e.settings.language==="en"?"now":"v\u1EEBa xong":s<3600?`${Math.floor(s/60)}m`:s<86400?`${Math.floor(s/3600)}h`:`${Math.floor(s/86400)}d`}function S(t){if(!Number.isFinite(t))return"\u2014";const s=new Date(t);return`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`}function m(t,s=3e5){if(!Number.isFinite(t))return null;const a=Math.max(0,Date.now()-t),c=s-a;if(c<=0)return{warm:!1,label:h().cacheExpired};const $=Math.ceil(c/1e3),y=Math.floor($/60),P=$%60;return{warm:!0,label:`${h().cacheWarm} ${y}:${String(P).padStart(2,"0")}`}}async function I(t,s={}){const c=await(window.sidecar?.fetch||((y,P)=>fetch(y,{...P,headers:{"Content-Type":"application/json",...P?.headers||{}}})))(t,{method:"POST",body:JSON.stringify(s)}),$=await c.json().catch(()=>({}));if(!c.ok)throw new Error($.error||`HTTP ${c.status}`);return $}function L(){const t=h();if(document.documentElement.lang=e.settings.language,document.getElementById("brand-icon").innerHTML=l("lens",16),b.innerHTML=l("refresh",14),b.title=e.settings.language==="en"?"Refresh":"L\xE0m m\u1EDBi",window.sidecar?.previewMode){w.hidden=!1;const a=document.documentElement.dataset.theme==="dark";w.innerHTML=l(a?"sun":"moon",14),w.title=a?"Light":"Dark"}const s={session:"activity",usage:"barChart",search:"search",config:"sliders"};document.querySelectorAll(".tab").forEach(a=>{const c=a.dataset.tab;a.setAttribute("aria-selected",String(c===e.tab)),a.innerHTML=`${l(s[c],14)}<span>${t.tabs[c]}</span>`})}function R(){return`
    <div class="skeleton" style="height:30px;width:100%"></div>
    <div class="skeleton" style="height:78px;width:100%"></div>
    <div class="skeleton" style="height:110px;width:100%"></div>
    <div class="skeleton" style="height:160px;width:100%"></div>
  `}function q(){const t=h();if(e.sessionLoading&&!e.session)return R();const s=e.session;if(!s||s.empty)return`<div class="panel empty-state">${l("activity",20)}<div class="empty-state-title">${t.noSession}</div></div>`;const a=s.contextWindow||{},c=s.telemetry||{},$=a.usedPercent,y=e.settings.contextWarnPercent||80,P=$==null?"tone-ok":$>=90?"tone-danger":$>=y?"tone-warn":"tone-ok",tt=c.cacheHitPercent==null?"":c.cacheHitPercent>=70?"tone-ok":c.cacheHitPercent<35?"tone-warn":"",et=s.recent||[],st=et.find(r=>r.conversationId===s.conversationId)||et[0],nt=st?`${st.title} (${B(st.updatedAtMs)})`:s.title||s.conversationId.slice(0,12),ut=e.pickerOpen?`
    <div class="combo-menu" id="session-picker-menu" role="listbox" aria-label="Session">
      ${et.map(r=>{const V=r.conversationId===s.conversationId;return`
          <button type="button" class="combo-item" role="option" data-pick-conv="${i(r.conversationId)}" aria-selected="${V}">
            <span class="combo-item-check">${V?l("check",12):""}</span>
            <span class="combo-item-title" title="${i(r.title)}">${i(r.title)}</span>
            <span class="combo-item-time">${B(r.updatedAtMs)}</span>
          </button>
        `}).join("")}
    </div>
  `:"",j=(a.categories||[]).map(r=>{const V=Array.isArray(r.children)&&r.children.length>0,X=V&&e.openCats.has(r.key),rt=X?`
      <div class="cat-children">
        ${r.children.map(gt=>`
          <div class="cat-child-row">
            <span class="cat-child-name" title="${i(gt.label)}">${i(gt.label)}</span>
            <div class="cat-bar"><div class="cat-bar-fill cat-bar-sub" style="width:${Math.min(100,gt.percent||0)}%"></div></div>
            <span class="cat-val">${T(gt.tokens)} \xB7 ${gt.percent}%</span>
          </div>
        `).join("")}
      </div>
    `:"";return V?`
        <div class="cat-group" data-open="${X}">
          <button type="button" class="cat-row cat-row-btn" data-cat-key="${i(r.key)}" aria-expanded="${X}">
            <span class="cat-name" title="${i(r.label)}">${l(X?"chevronDown":"chevronRight",11)}<span>${i(r.label)}</span>${r.childCount>1?`<span class="cat-cnt">(${r.childCount})</span>`:""}</span>
            <div class="cat-bar"><div class="cat-bar-fill" style="width:${Math.min(100,r.percent||0)}%"></div></div>
            <span class="cat-val">${T(r.tokens)} \xB7 ${r.percent}%</span>
          </button>
          ${rt}
        </div>
      `:`
      <div class="cat-row">
        <span class="cat-name" title="${i(r.label)}">${i(r.label)}</span>
        <div class="cat-bar"><div class="cat-bar-fill" style="width:${Math.min(100,r.percent||0)}%"></div></div>
        <span class="cat-val">${T(r.tokens)} \xB7 ${r.percent}%</span>
      </div>
    `}).join(""),G=r=>({cmd:"terminal",read:"fileText",edit:"edit",search:"search",subagent:"gitBranch"})[r]||"box",ot=c.toolBreakdown?.length?`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("terminal",14)}<span>${t.toolBurn}</span></h2>
        <span class="section-meta num">${c.toolCount} calls</span>
      </div>
      <div class="panel tool-burn-list">
        ${c.toolBreakdown.map(r=>`
          <div class="cat-row">
            <span class="cat-name">${l(G(r.category),12)}<span>${i(t.toolCats[r.category]||r.category)}</span><span class="cat-cnt">\xD7${r.calls}${r.errors?` \xB7 ${r.errors}!`:""}</span></span>
            <div class="cat-bar"><div class="cat-bar-fill" style="width:${Math.min(100,r.sharePercent||0)}%"></div></div>
            <span class="cat-val">~${T(r.estOutputTokens)}${r.durationMs?` \xB7 ${O(r.durationMs)}`:""}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `:"",ct=(s.turns||[]).slice().reverse().map(r=>{const V=e.openTurns.has(r.turnNumber),X=(r.toolCalls||[]).map(rt=>`
      <div class="tool-item ${rt.error?"is-err":""}">
        <span class="tool-item-icon">${l(G(rt.category),13)}</span>
        <span class="tool-item-label" title="${i(rt.detail||rt.label)}">${i(rt.label)}</span>
        <span class="tool-item-dur">${O(rt.durationMs)}</span>
      </div>
    `).join("")||`<div class="section-meta">${t.noTools}</div>`;return`
      <div class="turn-row" data-open="${V}">
        <button type="button" class="turn-trigger" data-turn="${r.turnNumber}" aria-expanded="${V}">
          <span class="turn-num">#${r.turnNumber}</span>
          <span class="turn-main">
            <span class="turn-title">${i(r.promptTitle)}</span>
            <span class="turn-metrics">
              <span>${i(r.model||"\u2014")}</span>
              <span>${T(r.totalTokens)}</span>
              ${r.cacheHitPercent!=null?`<span>${r.cacheHitPercent}%</span>`:""}
              ${r.costUsd!=null?`<span>${v(r.costUsd)}</span>`:""}
              ${r.durationMs!=null?`<span>${O(r.durationMs)}</span>`:""}
              ${r.toolCalls?.length?`<span>${r.toolCalls.length} tools</span>`:""}
            </span>
          </span>
          <span class="turn-chev">${l("chevronRight",14)}</span>
        </button>
        ${V?`<div class="turn-detail">${X}</div>`:""}
      </div>
    `}).join(""),o=s.subagents?.length?`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("gitBranch",14)}<span>${t.subagents} (${s.subagents.length})</span></h2>
        ${s.subagentSummary?`<span class="section-meta num">${t.combined}: ${T(s.subagentSummary.combinedTotalTokens)} \xB7 ${v(s.subagentSummary.combinedCostUsd)}</span>`:""}
      </div>
      <div class="panel">
        ${s.subagents.map(r=>{const V=r.contextPercent!=null?Math.min(100,r.contextPercent):0,X=V>=85?"tone-danger":V>=70?"tone-warn":"";return`
            <button type="button" class="sub-row" data-inspect-sub="${i(r.conversationId)}" title="${i(r.role)}">
              <div class="sub-top">
                <span class="sub-role">${i(r.role)}</span>
                <span class="sub-right num">
                  ${r.contextPercent!=null?`<span class="badge ${X}">Ctx ${r.contextPercent}%</span>`:""}
                  <span class="sub-cost">${v(r.costUsd)}</span>
                </span>
              </div>
              <div class="sub-meta num">
                <span class="sub-model">${i(r.model||"\u2014")}</span>
                <span>${T(r.totalTokens)} tok</span>
                ${r.cacheHitPercent!=null?`<span>Cache ${r.cacheHitPercent}%</span>`:""}
                ${r.tps!=null?`<span>${r.tps} t/s</span>`:""}
                ${r.requests?`<span>${r.requests} req</span>`:""}
              </div>
            </button>
          `}).join("")}
      </div>
    </section>
  `:"",W=c.roles?`
    <div class="role-strip num">
      ${c.roles.planner?`<span>Planner: ${c.roles.planner.requests} req \xB7 ${T(c.roles.planner.tokens)}${c.roles.planner.tps?` \xB7 ${c.roles.planner.tps} t/s`:""}</span>`:""}
      ${c.roles.execution?`<span>Exec: ${c.roles.execution.requests} req \xB7 ${T(c.roles.execution.tokens)}${c.roles.execution.tps?` \xB7 ${c.roles.execution.tps} t/s`:""}</span>`:""}
    </div>
  `:"",z=m(a.latestRequestAtMs,a.cacheTtlMs||3e5),M=z?`<span id="ttl-pill" class="ttl-pill ${z.warm?"is-warm":"is-cold"}" data-req-ms="${a.latestRequestAtMs}" data-ttl-ms="${a.cacheTtlMs||3e5}">${l("clock",11)}<span>${i(z.label)}</span></span>`:"",Y=(a.latestCacheReadTokens||0)+(a.latestInputTokens||0)+(a.latestOutputTokens||0),lt=Math.min(100,$??0);let ht=`<div class="ctx-fill ${P}" style="width:${lt}%"></div>`;if(P==="tone-ok"&&Y>0&&lt>0){const r=lt*((a.latestCacheReadTokens||0)/Y),V=lt*((a.latestInputTokens||0)/Y),X=Math.max(0,lt-r-V);ht=`
      ${r>0?`<div class="ctx-fill seg-cache" style="width:${r.toFixed(2)}%"></div>`:""}
      ${V>0?`<div class="ctx-fill seg-input" style="width:${V.toFixed(2)}%"></div>`:""}
      ${X>0?`<div class="ctx-fill seg-output" style="width:${X.toFixed(2)}%"></div>`:""}
    `}const it=(s.series?.length||0)>=2,dt=(s.turns?.length||0)>=2,mt=(s.series||[]).filter(r=>Number.isFinite(r.tps)&&r.tps>0).length>=2;let K=e.sessionChart;K==="context"&&!it&&(K=dt?"turns":mt?"speed":"context"),K==="speed"&&!mt&&(K=it?"context":"turns"),K==="turns"&&!dt&&(K=it?"context":"speed");let $t="";K==="context"&&it?$t=vt(s.series,a.maxTokens||1e6,y):K==="turns"&&dt?$t=ft(s.turns):K==="speed"&&mt&&($t=yt(s.series));const Tt=$t?`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("trendingUp",14)}<span>${t.sessionTrend}</span></h2>
        <div class="seg" role="group">
          ${it?`<button type="button" class="seg-btn" data-schart="context" aria-pressed="${K==="context"}">${t.chartCtx}</button>`:""}
          ${dt?`<button type="button" class="seg-btn" data-schart="turns" aria-pressed="${K==="turns"}">${t.chartTurns}</button>`:""}
          ${mt?`<button type="button" class="seg-btn" data-schart="speed" aria-pressed="${K==="speed"}">${t.chartSpeed}</button>`:""}
        </div>
      </div>
      <div class="panel chart-box">${$t}</div>
    </section>
  `:"";return`
    <div class="session-bar">
      ${e.parentConvId&&e.parentConvId!==s.conversationId?`<button type="button" id="btn-back-parent" class="back-pill" title="${t.backParent}">${l("arrowLeft",12)}<span>${t.backParent}</span></button>`:""}
      <div class="combo" id="session-combo">
        <button type="button" id="session-picker-btn" class="combo-trigger" aria-haspopup="listbox" aria-expanded="${e.pickerOpen}" title="${i(nt)}">
          <span class="combo-trigger-text">${i(nt)}</span>
          <span class="combo-trigger-chev">${l("chevronDown",13)}</span>
        </button>
        ${ut}
      </div>
      <span class="badge" title="${i(s.model)}">${i(s.model)}</span>
    </div>

    <section class="panel" aria-label="${t.context}">
      <div class="ctx-head">
        <span class="ctx-title">${l("layers",14)}<span>${t.context}</span>${M}</span>
        <span class="ctx-numbers">
          <span class="ctx-ratio">${T(a.usedTokens)} / ${a.maxTokens?T(a.maxTokens):"\u2014"}</span>
          <span class="ctx-pct ${P}">${$!=null?`${$}%`:"\u2014"}</span>
        </span>
      </div>
      <div class="ctx-track-wrap">
        <div class="ctx-track" role="progressbar" aria-valuenow="${$??0}" aria-valuemin="0" aria-valuemax="100">
          ${ht}
        </div>
      </div>
      <div class="ctx-legend">
        <span><i class="dot dot-cache"></i> ${T(a.latestCacheReadTokens)} \xB7 <i class="dot dot-input"></i> ${T(a.latestInputTokens)} \xB7 <i class="dot dot-output"></i> ${T(a.latestOutputTokens)}${a.checkpointCount?` \xB7 ${t.checkpoints} ${a.checkpointCount}`:""}</span>
        ${a.categories?.length?`<button type="button" class="ctx-toggle" id="btn-ctx-toggle" aria-expanded="${e.ctxExpanded}">${t.breakdown} ${l(e.ctxExpanded?"chevronDown":"chevronRight",12)}</button>`:""}
      </div>
      ${a.staticOverheadTokens>0||a.burnPerTurnTokens>0?`
        <div class="ctx-tax-row num">
          ${a.staticOverheadTokens>0?`<span>${t.overhead} ${T(a.staticOverheadTokens)} (${a.staticOverheadPercent}%) \xB7 ${t.chatLbl} ${T(a.chatTokens)}</span>`:"<span></span>"}
          ${a.burnPerTurnTokens>0?`<span>+${T(a.burnPerTurnTokens)}${t.perTurn}${a.estTurnsToWarn!=null?` \xB7 ~${a.estTurnsToWarn} ${t.turnsLeft} \u2192 ${a.warnPercent||y}%`:""}</span>`:""}
        </div>
      `:""}
      ${e.ctxExpanded&&j?`<div class="ctx-cats">${j}</div>`:""}
    </section>

    <section class="kpi-rail" aria-label="Telemetry">
      <div class="kpi-cell">
        <span class="kpi-label">${l("database",13)}<span>${t.cacheHit}</span></span>
        <span class="kpi-value ${tt}">${c.cacheHitPercent!=null?`${c.cacheHitPercent}%`:"\u2014"}</span>
        <span class="kpi-sub">${T(c.cacheReadTokens)} read</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("zap",13)}<span>${t.speed}</span></span>
        <span class="kpi-value">${c.tps!=null?`${c.tps} t/s`:"\u2014"}</span>
        <span class="kpi-sub">TTFT ${O(c.avgTtftMs)}${c.peakTps?` \xB7 Max ${c.peakTps}`:""}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("cpu",13)}<span>${t.tokens}</span></span>
        <span class="kpi-value">${T(c.totalTokens)}</span>
        <span class="kpi-sub">In ${T(c.inputTokens)} \xB7 Out ${T(c.outputTokens)}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("dollar",13)}<span>${t.cost}</span></span>
        <span class="kpi-value">${v(c.costUsd)}</span>
        <span class="kpi-sub">${c.requestCount} req \xB7 ${c.toolCount} tools${c.errorCount?` \xB7 ${c.errorCount} ${t.errors}`:""}</span>
      </div>
    </section>

    ${W}

    ${Tt}

    ${ot}

    ${o}

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("activity",14)}<span>${t.turns}</span></h2>
        <span class="section-meta">${c.turnCount} \xB7 Model ${O(c.modelTimeMs)} \xB7 Tool ${O(c.toolTimeMs)}</span>
      </div>
      <div class="panel">${ct||`<div class="empty-state">${t.noSession}</div>`}</div>
    </section>
  `}function _(){const t=h();if(e.usageLoading&&!e.usage)return R();const s=e.usage,a=s?.totals||{},c=["5h","today","24h","7d","30d","all"].map(o=>`<button type="button" class="seg-btn" data-range="${o}" aria-pressed="${e.usageRange===o}">${t.ranges[o]}</button>`).join(""),$=`<option value="">${t.allModels}</option>`+(s?.availableModels||[]).map(o=>`<option value="${i(o)}" ${o===e.usageModel?"selected":""}>${i(o)}</option>`).join(""),y=`<option value="">${t.allConvs}</option>`+(s?.availableConversations||[]).map(o=>`<option value="${i(o.conversationId)}" ${o.conversationId===e.usageConv?"selected":""}>${i(o.title||o.conversationId.slice(0,8))}</option>`).join(""),P=[["tokens",t.tokens],["cost","$"],["requests","Req"],["cache","Cache %"]].map(([o,W])=>`<button type="button" class="seg-btn" data-metric="${o}" aria-pressed="${e.usageMetric===o}">${W}</button>`).join(""),tt=xt(s?.models||[],a),et=s?.heatmap?at(s.heatmap):"",st=e.logQuery.trim().toLowerCase(),nt=(s?.recentRequests||[]).filter(o=>!(e.logFilter==="err"&&!o.error&&!o.retryErrors?.length||e.logFilter==="drop"&&!o.cacheDrop||e.usageConv&&o.conversationId!==e.usageConv||st&&!`${o.model} ${o.conversationTitle||""} ${o.error||""} ${(o.retryErrors||[]).join(" ")}`.toLowerCase().includes(st))).slice(0,40);u=nt;const ut=nt.map((o,W)=>{const z=o.error||o.retryErrors?.[0]||"";return`
      <div class="req-row ${o.error?"is-err":o.cacheDrop?"is-drop":""}">
        <div class="req-top">
          <div class="req-left">
            <span class="req-clock mono">${S(o.timestampMs)}</span>
            <span class="req-model" title="${i(o.model)}">${i(o.model)}</span>
            ${o.source==="cli"?'<span class="badge">CLI</span>':""}
            ${o.error?`<span class="badge tone-danger">${t.filterErr}</span>`:""}
            ${o.cacheDrop?`<span class="badge tone-warn">Drop${o.cacheWasteUsd>0?` +${v(o.cacheWasteUsd)}`:""}</span>`:""}
          </div>
          <span class="req-right num">
            ${o.cacheHitPercent!=null?`<span class="section-meta">${o.cacheHitPercent}%</span>`:""}
            <span>${v(o.costUsd)}</span>
          </span>
        </div>
        <div class="req-meta num">
          <span>
            ${o.tps!=null?`${o.tps} t/s`:"\u2014"}${o.ttftMs!=null?` \xB7 ${O(o.ttftMs)}`:""} \xB7 In ${T(o.inputTokens)} \xB7 Cache ${T(o.cacheReadTokens)} \xB7 Out ${T(o.outputTokens)}
          </span>
          ${o.conversationId?`<button type="button" class="req-conv" data-open-conv="${i(o.conversationId)}" title="${i(o.conversationTitle||o.conversationId)}">${i(o.conversationTitle||o.conversationId.slice(0,8))}</button>`:""}
        </div>
        ${z?`
          <div class="req-err-box">
            <span class="req-err-txt" title="${i(z)}">${i(z)}</span>
            <button type="button" class="icon-btn" data-copy-req-err="${W}" title="Copy">${l("copy",12)}</button>
          </div>
        `:""}
      </div>
    `}).join("")||`<div class="empty-state">${t.noResults}</div>`,j=s?.budget||{},G=[];if(j.dailyBudgetUsd>0){const o=Math.min(100,Math.round(j.todayCostUsd/j.dailyBudgetUsd*100)),W=o>=100?"tone-danger":o>=80?"tone-warn":"tone-ok";G.push(`
      <div class="budget-item">
        <div class="budget-head num"><span>${t.budgetDaily}</span><span>${v(j.todayCostUsd)} / ${v(j.dailyBudgetUsd)} (${o}%)</span></div>
        <div class="ctx-track"><div class="ctx-fill ${W}" style="width:${o}%"></div></div>
      </div>
    `)}if(j.weeklyBudgetUsd>0){const o=Math.min(100,Math.round(j.weekCostUsd/j.weeklyBudgetUsd*100)),W=o>=100?"tone-danger":o>=80?"tone-warn":"tone-ok";G.push(`
      <div class="budget-item">
        <div class="budget-head num"><span>${t.budgetWeekly}</span><span>${v(j.weekCostUsd)} / ${v(j.weeklyBudgetUsd)} (${o}%)</span></div>
        <div class="ctx-track"><div class="ctx-fill ${W}" style="width:${o}%"></div></div>
      </div>
    `)}const ot=G.length?`
    <section class="panel budget-panel" aria-label="${t.budgetTitle}">${G.join("")}</section>
  `:"",ct=s?.topSessions?.length?`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("dollar",14)}<span>${t.topSessions}</span></h2>
        <span class="section-meta">${s.topSessions.length}</span>
      </div>
      <div class="panel">
        ${s.topSessions.map(o=>`
          <button type="button" class="sub-row" data-open-conv="${i(o.conversationId)}" title="${i(o.title)}">
            <div class="sub-top">
              <span class="sub-role">${i(o.title)}</span>
              <span class="sub-right num">
                <span class="badge">${o.sharePercent}%</span>
                <span class="sub-cost">${v(o.costUsd)}</span>
              </span>
            </div>
            <div class="sub-meta num">
              <span class="sub-model">${i(o.model||"\u2014")}</span>
              <span>${T(o.tokens)} tok</span>
              ${o.cacheHitPercent!=null?`<span>Cache ${o.cacheHitPercent}%</span>`:""}
              <span>${o.requests} req</span>
              ${o.cacheDrops?`<span class="badge tone-warn">${o.cacheDrops} drop</span>`:""}
            </div>
          </button>
        `).join("")}
      </div>
    </section>
  `:"";return`
    <div class="toolbar">
      <div class="seg" role="group">${c}</div>
      <select id="usage-model" class="select select-sm" aria-label="Model">${$}</select>
    </div>

    <section class="kpi-rail">
      <div class="kpi-cell">
        <span class="kpi-label">${l("activity",13)}<span>${t.requests}</span></span>
        <span class="kpi-value">${a.requests??0}</span>
        <span class="kpi-sub">${a.errors?`${a.errors} ${t.errors}`:"0 err"}${a.retries?` \xB7 ${a.retries} retry`:""}${a.cliRequests?` \xB7 CLI ${a.cliRequests}`:""}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("cpu",13)}<span>${t.tokens}</span></span>
        <span class="kpi-value">${T(a.totalTokens)}</span>
        <span class="kpi-sub">In ${T(a.inputTokens)} \xB7 Out ${T(a.outputTokens)}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("database",13)}<span>${t.cacheHit}</span></span>
        <span class="kpi-value ${(a.cacheHitPercent??0)>=70?"tone-ok":""}">${a.cacheHitPercent!=null?`${a.cacheHitPercent}%`:"\u2014"}</span>
        <span class="kpi-sub">${T(a.cacheReadTokens)}${a.cacheDrops?` \xB7 ${a.cacheDrops} drop`:""}${a.cacheWasteUsd>0?` (+${v(a.cacheWasteUsd)})`:""}</span>
      </div>
      <div class="kpi-cell">
        <span class="kpi-label">${l("dollar",13)}<span>${t.cost}</span></span>
        <span class="kpi-value">${v(a.costUsd)}</span>
        <span class="kpi-sub">${e.settings.pricingMode==="promo"?t.modePromo:t.modeStandard}</span>
      </div>
    </section>

    ${ot}

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("barChart",14)}<span>${t.daily}</span></h2>
        <div class="seg" role="group">${P}</div>
      </div>
      <div class="panel chart-box">
        ${s?.days?.length?bt(s.days,e.usageMetric):`<div class="empty-state">${t.noResults}</div>`}
      </div>
    </section>

    ${tt?`
      <section class="section">
        <div class="section-head">
          <h2 class="section-title">${l("pieChart",14)}<span>${t.tokenMix}</span></h2>
          <span class="section-meta">${T(a.totalTokens)}</span>
        </div>
        <div class="panel">${tt}</div>
      </section>
    `:""}

    ${et?`
      <section class="section">
        <div class="section-head">
          <h2 class="section-title">${l("calendar",14)}<span>${t.heatmap}</span></h2>
          <span class="section-meta num">${s.heatmap.length}d</span>
        </div>
        <div class="panel chart-box">${et}</div>
      </section>
    `:""}

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("layers",14)}<span>${t.byModel}</span></h2>
        <span class="section-meta">${s?.models?.length||0}</span>
      </div>
      <div class="panel">
        ${kt(s?.models||[])}
        <div class="table-wrap">
          <table class="tbl">
            <thead>
              <tr>
                <th>${t.colModel}</th>
                <th class="r">${t.colReq}</th>
                <th class="r">${t.colTokens}</th>
                <th class="r">${t.colCache}</th>
                <th class="r">${t.colCost}</th>
              </tr>
            </thead>
            <tbody>
              ${(s?.models||[]).map((o,W)=>`
                <tr>
                  <td class="trunc" title="${i(o.model)}">
                    <span class="model-cell">
                      <i class="swatch" style="background:${W<5?pt(W):"var(--line-strong)"}"></i>
                      <span class="model-cell-stack">
                        <span class="model-cell-name">${i(o.model)}</span>
                        ${o.avgTps!=null?`<span class="model-speed mono">${o.avgTps}${o.peakTps?` / ${o.peakTps}`:""} t/s</span>`:""}
                      </span>
                    </span>
                  </td>
                  <td class="r">${o.requests}</td>
                  <td class="r">${T(o.tokens)}</td>
                  <td class="r">${o.cacheHitPercent!=null?`${o.cacheHitPercent}%`:"\u2014"}</td>
                  <td class="r">${v(o.costUsd)}</td>
                </tr>
              `).join("")||`<tr><td colspan="5" class="empty-state">${t.noResults}</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    ${ct}

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("terminal",14)}<span>${t.recentLog}</span></h2>
        <div class="seg" role="group">
          <button type="button" class="seg-btn" data-log-filter="all" aria-pressed="${e.logFilter==="all"}">${t.filterAll}</button>
          <button type="button" class="seg-btn" data-log-filter="err" aria-pressed="${e.logFilter==="err"}">${t.filterErr}${a.errors?` (${a.errors})`:""}</button>
          <button type="button" class="seg-btn" data-log-filter="drop" aria-pressed="${e.logFilter==="drop"}">${t.filterDrop}${a.cacheDrops?` (${a.cacheDrops})`:""}</button>
        </div>
      </div>
      <div class="panel">
        <div class="log-controls">
          <input id="log-search" class="input" type="search" value="${i(e.logQuery)}" placeholder="${i(t.logSearchPlaceholder)}" autocomplete="off">
          <select id="log-conv" class="select select-sm" aria-label="Session">${y}</select>
        </div>
        ${ut}
      </div>
    </section>
  `}function x(t){const s=t.snippet||"",a=Math.max(0,t.matchStart||0),c=Math.max(0,t.matchLength||0);return!c||a>=s.length?i(s):`${i(s.slice(0,a))}<mark>${i(s.slice(a,a+c))}</mark>${i(s.slice(a+c))}`}function U(){const t=h(),s=["all","text","code","cmd"].map(c=>`<button type="button" class="seg-btn" data-scope="${c}" aria-pressed="${e.searchScope===c}">${t.scopes[c]}</button>`).join("");let a="";if(e.searchLoading)a='<div class="panel" style="padding:12px;display:flex;flex-direction:column;gap:8px"><div class="skeleton" style="height:48px"></div><div class="skeleton" style="height:48px"></div></div>';else if(!e.searchQuery.trim()||e.searchQuery.trim().length<2&&!/[^\x00-\x7f]/.test(e.searchQuery))a=`<div class="panel empty-state">${l("search",18)}<div class="empty-state-title">${t.searchPrompt}</div></div>`;else if(!e.searchData?.results?.length)a=`<div class="panel empty-state">${l("search",18)}<div class="empty-state-title">${t.noResults}</div></div>`;else{const c=e.searchData.results.map(($,y)=>`
      <div class="search-item">
        <div class="search-item-head">
          <span class="search-item-title" title="${i($.title)}">${i($.title)}</span>
          <span class="search-item-actions">
            <span class="badge">${t.kinds[$.kind]||$.kind} #${$.turnNumber}</span>
            <span class="section-meta">${B($.timestampMs)}</span>
            ${$.copyText?`<button type="button" class="icon-btn" data-copy-idx="${y}" title="Copy">${l("copy",13)}</button>`:""}
            <button type="button" class="icon-btn" data-open-conv="${i($.conversationId)}" title="${t.open}">${l("arrowUpRight",13)}</button>
          </span>
        </div>
        <div class="search-snippet ${$.kind==="code"||$.kind==="cmd"?"is-code":""}">${x($)}</div>
      </div>
    `).join("");a=`
      <div class="section-head">
        <span class="section-meta">${e.searchData.results.length} / ${e.searchData.scanned} sessions${e.searchData.truncated?"+":""}</span>
      </div>
      <div class="panel">${c}</div>
    `}return`
    <div class="search-bar">
      <div class="search-input-wrap">
        <span class="search-ic">${l("search",14)}</span>
        <input id="search-input" class="input search-input" type="search" value="${i(e.searchQuery)}" placeholder="${i(t.searchPlaceholder)}" autocomplete="off">
      </div>
    </div>
    <div class="seg" role="group">${s}</div>
    ${a}
  `}function Z(){const t=h(),s=e.session,a=s?.turns?.length||0,c=`<option value="">${t.exportAll}${a?` (${a})`:""}</option>`+Array.from({length:a},(y,P)=>P+1).map(y=>`<option value="${y}" ${String(e.exportTurn)===String(y)?"selected":""}>${t.exportUntil} #${y}</option>`).join(""),$=e.catalog.map(y=>{const P=e.settings.pricingMode==="promo"||!y.standard?y:y.standard;return`
      <tr data-rate-model="${i(y.model)}">
        <td class="trunc" title="${i(y.model)}">${i(y.label||y.model)}</td>
        <td class="r"><input type="number" step="0.01" min="0" class="rate-input" data-field="input" value="${P.input}"></td>
        <td class="r"><input type="number" step="0.005" min="0" class="rate-input" data-field="cache" value="${P.cache}"></td>
        <td class="r"><input type="number" step="0.1" min="0" class="rate-input" data-field="output" value="${P.output}"></td>
      </tr>
    `}).join("");return`
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("download",14)}<span>${t.exportTitle}</span></h2>
        ${s?.conversationId?`<span class="section-meta mono">${i(s.conversationId.slice(0,8))}</span>`:""}
      </div>
      <div class="panel export-bar">
        <select id="export-turn" class="select select-sm export-turn-sel" ${a?"":"disabled"}>${c}</select>
        <div class="toolbar-group">
          <button type="button" class="btn btn-sm" id="btn-export-fork" ${s?.conversationId?"":"disabled"}>${l("gitBranch",13)}<span>${t.exportFork}</span></button>
          <button type="button" class="btn btn-sm" id="btn-export-md" ${s?.conversationId?"":"disabled"}>${l("fileText",13)}<span>${t.exportMd}</span></button>
          <button type="button" class="btn btn-sm" id="btn-export-jsonl" ${s?.conversationId?"":"disabled"}>${l("terminal",13)}<span>${t.exportJsonl}</span></button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("sliders",14)}<span>${t.prefsTitle}</span></h2>
        ${e.statusBadge?`<span class="badge tone-ok">${i(e.statusBadge)}</span>`:""}
      </div>
      <div class="panel row-list">
        <div class="setting-row">
          <span class="setting-label">${t.language}</span>
          <div class="seg" role="group">
            <button type="button" class="seg-btn" data-set-lang="vi" aria-pressed="${e.settings.language==="vi"}">VI</button>
            <button type="button" class="seg-btn" data-set-lang="en" aria-pressed="${e.settings.language==="en"}">EN</button>
          </div>
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.pricingMode}</span>
          <div class="seg" role="group">
            <button type="button" class="seg-btn" data-set-pmode="standard" aria-pressed="${e.settings.pricingMode==="standard"}">${t.modeStandard}</button>
            <button type="button" class="seg-btn" data-set-pmode="promo" aria-pressed="${e.settings.pricingMode==="promo"}">${t.modePromo}</button>
          </div>
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.warnAt}</span>
          <div class="seg" role="group">
            ${[75,80,85,90].map(y=>`<button type="button" class="seg-btn" data-set-warn="${y}" aria-pressed="${e.settings.contextWarnPercent===y}">${y}%</button>`).join("")}
          </div>
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.ctxLimit}</span>
          <select id="set-ctx-limit" class="select select-sm">
            ${[[1e6,"1M"],[512e3,"512K"],[256e3,"256K"],[2e6,"2M"],[0,t.auto]].map(([y,P])=>`<option value="${y}" ${e.settings.contextLimitOverride===y?"selected":""}>${P}</option>`).join("")}
          </select>
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.dailyBudget}</span>
          <input type="number" id="set-budget-daily" class="rate-input" min="0" step="1" value="${e.settings.dailyBudgetUsd||0}" aria-label="${t.dailyBudget}">
        </div>
        <div class="setting-row">
          <span class="setting-label">${t.weeklyBudget}</span>
          <input type="number" id="set-budget-weekly" class="rate-input" min="0" step="5" value="${e.settings.weeklyBudgetUsd||0}" aria-label="${t.weeklyBudget}">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${l("dollar",14)}<span>${t.ratesTitle}</span>${e.pricingMeta?.syncedAt?`<span class="section-meta">${i(e.pricingMeta.syncedAt.slice(0,10))}</span>`:""}</h2>
        <div class="toolbar-group">
          <button type="button" class="btn btn-sm" id="btn-sync-pricing" ${e.syncingRates?"disabled":""}>${l("refresh",12)}<span>${t.syncRates}</span></button>
          <button type="button" class="btn btn-sm" id="btn-reset-settings">${l("rotateCcw",12)}<span>${t.resetAll}</span></button>
          <button type="button" class="btn btn-sm btn-primary" id="btn-save-rates">${l("check",12)}<span>${t.saveRates}</span></button>
        </div>
      </div>
      <div class="panel table-wrap">
        <table class="tbl rate-tbl">
          <thead>
            <tr>
              <th>${t.colModel}</th>
              <th class="r">Input</th>
              <th class="r">Cache</th>
              <th class="r">Output</th>
            </tr>
          </thead>
          <tbody>${$}</tbody>
        </table>
      </div>
    </section>
  `}function g(){L();const t=h(),s=e.error?`
    <div class="error-banner" role="alert">
      <span>${l("alert",14)} ${i(e.error)}</span>
      <button type="button" class="btn btn-sm" id="btn-retry">${t.retry}</button>
    </div>
  `:"";let a="";e.tab==="session"?a=q():e.tab==="usage"?a=_():e.tab==="search"?a=U():a=Z();const c=document.activeElement?.id,$=document.activeElement?.selectionStart,y=document.activeElement?.selectionEnd;if(k.innerHTML=s+a,["search-input","log-search"].includes(c)){const P=document.getElementById(c);P&&(P.focus(),typeof $=="number"&&P.setSelectionRange($,y))}}function n(){if(e.pickerOpen)return!0;const t=document.activeElement?.tagName;return t==="SELECT"||t==="INPUT"||t==="TEXTAREA"}function d(){e.pendingRender&&!n()&&(e.pendingRender=!1,g())}async function f({silent:t=!1}={}){const s=++p;t||(e.sessionLoading=!0,g());let a=!t;try{const c=await I("/api/session",{conversationId:e.selectedConvId,knownRev:t?e.sessionRev:0});if(s!==p)return;e.error&&(a=!0),e.error="",c.unchanged||(e.session=c,e.sessionRev=c.rev||0,c.conversationId&&!e.selectedConvId&&(e.selectedConvId=c.conversationId),a=!0)}catch(c){if(s!==p)return;e.error=c.message,a=!0}finally{if(s!==p||(e.sessionLoading=!1,!a))return;if(t&&n()){e.pendingRender=!0;return}e.pendingRender=!1;const c=window.scrollY;g(),t&&c>0&&window.scrollTo(0,c)}}async function E({force:t=!1}={}){e.usageLoading=!0,g();try{e.usage=await I("/api/usage",{range:e.usageRange,model:e.usageModel,force:t}),e.error=""}catch(s){e.error=s.message}finally{e.usageLoading=!1,g()}}let D=null;async function Q(){const t=e.searchQuery.trim();if(!t||t.length<2&&!/[^\x00-\x7f]/.test(t)){e.searchData=null,e.searchLoading=!1,g();return}e.searchLoading=!0,g();try{e.searchData=await I("/api/search",{query:t,scope:e.searchScope}),e.error=""}catch(s){e.error=s.message}finally{e.searchLoading=!1,g()}}async function N(t){try{const s=await I("/api/settings/set",t);e.settings=s.settings,e.catalog=s.catalog,e.sessionRev=0,H(h().saved),e.tab==="session"?await f():e.tab==="usage"?await E({force:!0}):g()}catch(s){e.error=s.message,g()}}let F=null;function H(t){e.statusBadge=t,clearTimeout(F),F=setTimeout(()=>{e.statusBadge="",e.tab==="config"&&!n()&&g()},1800)}async function A(t){if(e.session?.conversationId)try{const s=await I("/api/export",{conversationId:e.session.conversationId,format:t,untilTurn:e.exportTurn||null});if(t==="fork"){await navigator.clipboard?.writeText(s.body).catch(()=>{}),H(h().copied),g();return}const a=new Blob([s.body],{type:s.contentType}),c=URL.createObjectURL(a),$=document.createElement("a");$.href=c,$.download=s.filename,document.body.appendChild($),$.click(),$.remove(),setTimeout(()=>URL.revokeObjectURL(c),1e3)}catch(s){e.error=s.message,g()}}document.querySelector(".tabs").addEventListener("click",t=>{const s=t.target.closest(".tab");if(!s)return;const a=s.dataset.tab;a!==e.tab&&(e.tab=a,e.pickerOpen=!1,e.error="",g(),a==="session"?f():a==="usage"?E():a==="search"&&document.getElementById("search-input")?.focus())}),b.addEventListener("click",async()=>{b.classList.add("spinning");try{e.tab==="session"?await f():e.tab==="usage"?await E({force:!0}):e.tab==="search"?await Q():await f()}finally{b.classList.remove("spinning")}}),w.addEventListener("click",()=>{const t=document.documentElement.dataset.theme;document.documentElement.dataset.theme=t==="dark"?"light":"dark",L()}),k.addEventListener("click",async t=>{if(t.target.closest("#btn-retry")){e.error="",b.click();return}if(t.target.closest("#session-picker-btn")){t.stopPropagation(),e.pickerOpen=!e.pickerOpen,g(),e.pickerOpen?document.querySelector('#session-picker-menu .combo-item[aria-selected="true"]')?.scrollIntoView({block:"nearest"}):d();return}const c=t.target.closest("[data-pick-conv]");if(c){t.stopPropagation();const M=c.dataset.pickConv;e.pickerOpen=!1,e.pendingRender=!1,e.parentConvId="",M&&M!==e.selectedConvId?(e.selectedConvId=M,e.sessionRev=0,e.openTurns.clear(),await f()):g();return}const $=t.target.closest("[data-inspect-sub]");if($){const M=$.dataset.inspectSub;M&&(e.parentConvId||(e.parentConvId=e.selectedConvId||e.session?.conversationId||""),e.selectedConvId=M,e.sessionRev=0,e.openTurns.clear(),await f());return}if(t.target.closest("#btn-back-parent")&&e.parentConvId){e.selectedConvId=e.parentConvId,e.parentConvId="",e.sessionRev=0,e.openTurns.clear(),await f();return}const y=t.target.closest("[data-schart]");if(y){e.sessionChart=y.dataset.schart,g();return}if(t.target.closest("#btn-ctx-toggle")){e.ctxExpanded=!e.ctxExpanded;try{localStorage.setItem("agy_lens_ctx_expanded",e.ctxExpanded?"1":"0")}catch{}g();return}const tt=t.target.closest("[data-cat-key]");if(tt){const M=tt.dataset.catKey;e.openCats.has(M)?e.openCats.delete(M):e.openCats.add(M),g();return}const et=t.target.closest(".turn-trigger");if(et){const M=Number(et.dataset.turn);e.openTurns.has(M)?e.openTurns.delete(M):e.openTurns.add(M),g();return}const st=t.target.closest("[data-range]");if(st){e.usageRange=st.dataset.range,await E();return}const nt=t.target.closest("[data-metric]");if(nt){e.usageMetric=nt.dataset.metric,g();return}const ut=t.target.closest("[data-log-filter]");if(ut){e.logFilter=ut.dataset.logFilter,g();return}const j=t.target.closest("[data-scope]");if(j){e.searchScope=j.dataset.scope,await Q();return}const G=t.target.closest("[data-open-conv]");if(G){const M=G.dataset.openConv;window.sidecar?.ui?.toggleConversation&&window.sidecar.ui.toggleConversation(M),e.selectedConvId=M,e.tab="session",e.sessionRev=0,await f();return}const ot=t.target.closest("[data-copy-idx]");if(ot){const M=e.searchData?.results?.[Number(ot.dataset.copyIdx)];M?.copyText&&(await navigator.clipboard?.writeText(M.copyText).catch(()=>{}),ot.innerHTML=l("check",13),setTimeout(()=>{ot.innerHTML=l("copy",13)},1e3));return}const ct=t.target.closest("[data-copy-req-err]");if(ct){const M=u[Number(ct.dataset.copyReqErr)],Y=M?.error||M?.retryErrors?.[0]||"";Y&&(await navigator.clipboard?.writeText(Y).catch(()=>{}),ct.innerHTML=l("check",12),setTimeout(()=>{ct.innerHTML=l("copy",12)},1e3));return}if(t.target.closest("#btn-export-fork")){await A("fork");return}if(t.target.closest("#btn-export-md")){await A("md");return}if(t.target.closest("#btn-export-jsonl")){await A("jsonl");return}if(t.target.closest("#btn-sync-pricing")){e.syncingRates=!0,g();try{const M=await I("/api/pricing/sync",{});e.catalog=M.catalog||e.catalog,e.pricingMeta=M.pricingMeta||e.pricingMeta,e.error="",H(h().saved)}catch(M){e.error=M.message}finally{e.syncingRates=!1,g()}return}const o=t.target.closest("[data-set-lang]");if(o){await N({language:o.dataset.setLang});return}const W=t.target.closest("[data-set-pmode]");if(W){await N({pricingMode:W.dataset.setPmode});return}const z=t.target.closest("[data-set-warn]");if(z){await N({contextWarnPercent:Number(z.dataset.setWarn)});return}if(t.target.closest("#btn-save-rates")){const M={};k.querySelectorAll("tr[data-rate-model]").forEach(Y=>{const lt=Y.dataset.rateModel,ht=Number(Y.querySelector('[data-field="input"]').value),it=Number(Y.querySelector('[data-field="cache"]').value),dt=Number(Y.querySelector('[data-field="output"]').value);[ht,it,dt].every(Number.isFinite)&&(M[lt]={input:ht,cache:it,output:dt})}),await N({customRates:M});return}if(t.target.closest("#btn-reset-settings")){const M=await I("/api/settings/reset",{});e.settings=M.settings,e.catalog=M.catalog,e.sessionRev=0,H(h().saved),g()}}),k.addEventListener("change",async t=>{t.target.id==="usage-model"?(e.usageModel=t.target.value,await E()):t.target.id==="log-conv"?(e.usageConv=t.target.value,g()):t.target.id==="export-turn"?e.exportTurn=t.target.value:t.target.id==="set-ctx-limit"?await N({contextLimitOverride:Number(t.target.value)}):t.target.id==="set-budget-daily"?await N({dailyBudgetUsd:Number(t.target.value)||0}):t.target.id==="set-budget-weekly"&&await N({weeklyBudgetUsd:Number(t.target.value)||0})}),k.addEventListener("focusout",()=>{setTimeout(d,0)}),document.addEventListener("click",t=>{e.pickerOpen&&!t.target.closest("#session-combo")&&(e.pickerOpen=!1,g(),d())}),k.addEventListener("input",t=>{t.target.id==="search-input"?(e.searchQuery=t.target.value,clearTimeout(D),D=setTimeout(()=>{Q()},220)):t.target.id==="log-search"&&(e.logQuery=t.target.value,g())}),k.addEventListener("pointermove",t=>{const s=t.target.closest("[data-tip]");if(!s){C.hidden=!0;return}C.textContent=s.dataset.tip,C.hidden=!1;const a=Math.min(window.innerWidth-C.offsetWidth-8,t.clientX+10),c=Math.max(8,t.clientY-C.offsetHeight-10);C.style.left=`${Math.max(8,a)}px`,C.style.top=`${c}px`}),k.addEventListener("pointerleave",()=>{C.hidden=!0}),window.addEventListener("keydown",t=>{if(e.pickerOpen){if(t.key==="Escape"){t.preventDefault(),e.pickerOpen=!1,g(),document.getElementById("session-picker-btn")?.focus(),d();return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){const s=[...document.querySelectorAll("#session-picker-menu .combo-item")];if(s.length){t.preventDefault();const a=s.indexOf(document.activeElement),c=a<0?0:(a+(t.key==="ArrowDown"?1:-1)+s.length)%s.length;s[c].focus()}return}}t.key==="/"&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName)&&(t.preventDefault(),e.tab="search",e.pickerOpen=!1,g(),document.getElementById("search-input")?.focus())}),window.addEventListener("agy-lens-select-conversation",t=>{const s=t.detail?.conversationId;s&&(e.selectedConvId=s,e.tab="session",e.sessionRev=0,f())});async function J(){L(),g();try{const s=await I("/api/bootstrap",{});e.settings=s.settings||e.settings,e.catalog=s.catalog||[],e.pricingMeta=s.pricingMeta||e.pricingMeta}catch(s){e.error=s.message}const t=new URLSearchParams(window.location.search).get("tab");["session","usage","search","config"].includes(t)&&(e.tab=t),await f(),e.tab==="usage"?await E():e.tab==="config"&&g(),setInterval(()=>{e.tab==="session"&&!document.hidden&&f({silent:!0})},4e3),setInterval(()=>{const s=document.getElementById("ttl-pill");if(!s||e.tab!=="session"||document.hidden)return;const a=Number(s.dataset.reqMs),c=Number(s.dataset.ttlMs)||3e5,$=m(a,c);if(!$)return;s.classList.toggle("is-warm",$.warm),s.classList.toggle("is-cold",!$.warm);const y=s.querySelector("span");y&&y.textContent!==$.label&&(y.textContent=$.label)},1e3)}window.addEventListener("error",t=>{e.error=t?.message||"UI error",g()}),J()})();

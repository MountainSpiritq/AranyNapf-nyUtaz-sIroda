# Verziokezeles

## helyi repo letrehozasa

- inicaializálás:
    >git init
- felhasználó ellenorzes
    >git config user.name

    >git config user.email

- ellenorzes(van-e a repo es amunkakonyvtar kozott kulmbseg)
    >git status

- elokeszites a commit-ra(beindexelodes)
    >git add . (az osszes file)

- commit(az ujab verzio eltarolasa)
    > git commit -m "placeholdertxt"

## Osszekapcsolas a a tavoli repoval(github)

- uj github repo letrehozasa
- helyi repo osszekapcsolasa a tavolival:
   >git remote add origin https://github.com/MountainSpiritq/versionhandling.git
-elso push-nal megkell mondani a branch nevet:
   >git push -u origin master
-a tovabbi pushnal
    >git push
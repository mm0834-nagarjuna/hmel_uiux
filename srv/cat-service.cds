using my.appraisal as my from '../db/schema';

service CatalogService {
     entity appraisal as projection on my.AppraisalDocuments;
}
